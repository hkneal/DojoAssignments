from flask import Flask, render_template, redirect, request, session, flash
# the "re" module will let us perform some regular expression operations
import re, datetime
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"

def validBday(date_text):
    present = datetime.datetime.now()
    try:
        past = datetime.datetime.strptime(date_text, '%Y-%m-%d')
        delta = present-past
        print delta
        print type(delta)
        if delta > datetime.timedelta(seconds=1):
            print present-past
            print present.date()
            print past.date()
            return True
        else:
            print present-past
            print "Failed date compare"
            return False
    except:
        "failed in date input validation"
        return False

def hasNumbers(strInput):
    return any(char.isdigit() for char in strInput)

def hasUpper(strInput):
    return any(char.isupper() for char in strInput)

def validateName(strInput):
    if len(strInput) < 1:
        return False
    elif not strInput.isalpha():
        return False
    return True

@app.route('/', methods=['GET'])
def index():
    session['fname'] = ""
    session['lname'] = ""
    session['email'] = ""
    session['password'] = ""
    session['confirm_password'] = ""
    session['bday'] = ""
    return render_template("index.html")

@app.route('/validate', methods=['POST'])
def submit():
    session['fname'] = request.form['first_name']
    session['lname'] = request.form['last_name']
    session['bday'] = request.form['bday']
    session['email'] = request.form['email']
    session['password'] = request.form['password']
    session['confirm_password'] = request.form['confirm_password']

    #validate the input starting with first_name
    if not validateName(session['fname']):
        flash("First name cannot be blank and cannot contain numbers or symbols!", 'error')
        return render_template("index.html")
    elif not validateName(session['lname']):
        flash("Last name cannot be blank and cannot contain numbers or symbols!!", 'error')
        return render_template("index.html")
    elif not validBday(session['bday']):
        flash("Incorrect data format, should be YYYY-MM-DD", 'error')
        flash("Or the date is an inncorrect date, it should be before today :)", 'error')
        return render_template("index.html")
    elif len(session['email']) < 1:
        flash("Email cannot be blank!", 'error')
        return render_template("index.html")
    # else if email doesn't match regular expression display an "invalid email address" message
    elif not EMAIL_REGEX.match(session['email']):
        flash("Invalid Email Address!", 'error')
        return render_template("index.html")
    elif len(session['password']) < 9:
        flash("Password should be more than 8 characters!", 'error')
        return render_template("index.html")
    elif not hasNumbers(session['password']):
        flash("Password should contain at least 1 number!", 'error')
        return render_template("index.html")
    elif not hasUpper(session['password']):
        flash("Password should contain at least 1 Uppercase letter!", 'error')
        return render_template("index.html")
    elif session['password'] != session['confirm_password']:
        flash("The Password and Confirm Password fields must match!", 'error')
        return render_template("index.html")
    else:
        flash("Success! The form has been submitted!", "ok")
        return redirect('/')
app.run(debug=True)
