from django.shortcuts import render, redirect
from .models import WallUsers, Messages, Comments
import re
# import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
# bcrypt = Bcrypt(app)
# app.secret_key = "ThisIsSecret!"

def hasNumbers(strInput):
    return any(char.isdigit() for char in strInput)

def hasUpper(strInput):
    return any(char.isupper() for char in strInput)

def validateName(strInput):
    if len(strInput) < 2:
        return False
    elif not strInput.isalpha():
        return False
    return True

def validateText(strInput):
    if len(strInput) < 1:
        return False
    return True

# Create your views here.
def index(request):
    request.session['first_name'] = ""
    request.session['last_name'] = ""
    request.session['email'] = ""
    request.session['password'] = ""
    request.session['confirm_password'] = ""
    if request.session['errorMessage']:
        request.session['okMessage'] = ""
    else:
        request.session['errorMessage'] = []
    # if request.session['okMessage']:
    #     pass
    # else:
    #     request.session['okMessage'] = []
    return render(request, 'wall_app/index.html')

def register(request):
    request.session['first_name'] = request.POST['first_name']
    request.session['last_name'] = request.POST['last_name']
    request.session['email'] = request.POST['email']
    request.session['password'] = request.POST['password']
    request.session['confirm_password'] = request.POST['confirm_password']
    #validate the input starting with first_name
    if not validateName(request.session['first_name']):
        #Create an errors array and push the error messages, check if errors at end
        request.session['errorMessage'].append("First name cannot be less than 2 characters and cannot contain numbers or symbols!")
        return render(request, 'wall_app/index.html')
    elif not validateName(request.session['last_name']):
        request.session['errorMessage'].append("Last name cannot be less than 2 characters and cannot contain numbers or symbols!!")
        return render(request, 'wall_app/index.html')
    elif len(request.session['email']) < 1:
        request.session['errorMessage'].append("Email cannot be blank!")
        return render(request, 'wall_app/index.html')
    # else if email doesn't match regular expression display an "invalid email address" message
    elif not EMAIL_REGEX.match(request.session['email']):
        request.session['errorMessage'].append("Invalid Email Address!")
        return render(request, 'wall_app/index.html')
    elif len(request.session['password']) < 8:
        request.session['errorMessage'].append("Password should be at least 8 characters!")
        return render(request, 'wall_app/index.html')
    elif not hasNumbers(request.session['password']):
        request.session['errorMessage'].append("Password should contain at least 1 number!")
        return render(request, 'wall_app/index.html')
    elif not hasUpper(request.session['password']):
        request.session['errorMessage'].append("Password should contain at least 1 Uppercase letter!")
        return render(request, 'wall_app/index.html')
    elif request.session['password'] != request.session['confirm_password']:
        request.session['errorMessage'].append("The Password and Confirm Password fields must match!")
        return render(request, 'wall_app/index.html')
    else:
        # pw_hash = bcrypt.generate_password_hash(request.session['password'])
        WallUsers.objects.create(first_name=request.session['first_name'], last_name=request.session['last_name'], email=request.session['email'], password=request.session['password'])
        wallusers = WallUsers.objects.all()
        print wallusers
        request.session['okMessage'] = []
        request.session.append("You Have Successfully Registered! You May Now Login.")
        request.session['errorMessage'] = []
        return redirect('/')

def login(request):
    email = request.POST['email']
    password = request.POST['password']
    if len(email) < 1 or not EMAIL_REGEX.match(email):
        request.session['errorMessage'].append("Invalid Email Address!")
        return render_template('index.html')
    elif len(password) < 2:
        request.session['errorMessage'].append("Password should be at least 8 characters!")
        return render_template('index.html')
    else:
        user = WallUsers.objects.get(email=email)
        if len(user) < 1:
            request.session['errorMessage'].append("You must register first!")
            return render_template('index.html')
        elif user.password == password:
            context = {
                # 'messages' = user.messages
                # 'comments' = user.comments
                'username': user.first_name,
                'id': user.wallusers_id
            }
            # return render_template('wall.html', username=username, messages=messages, comments=comments)
            return render_template('wall.html', context)
        else:
            request.session['errorMessage'].append("The Password You Entered is Incorrect!")
            return render_template("index.html")
