from django.shortcuts import render, redirect
from .models import UserName, Secret, Like
from django.db.models import Count
from django.db.models.functions import Coalesce
# Create your views here.
def index(req):
    return render(req, 'secrets_app/index.html')

def createContext(id):
    thisUser = UserName.objects.get(id=id)
    #Counts all of the secrets and orders them by creation date
    secrets = Secret.objects.all().order_by(Coalesce('updated_at','created_at').desc())
    #Create a list of all the secret id's that this user has liked, then check that list in template
    likeslst = Like.objects.filter(user=id).values_list("like", flat=True)
    context = {
        'user' : thisUser,
        'secrets' : secrets,
        'likeslst': likeslst
    }
    return context

def secrets(req):
    if req.method == 'POST':
        if req.POST['submit'] == 'Register':
            req.session['first_name'] = req.POST['first_name']
            req.session['last_name'] = req.POST['last_name']
            req.session['password'] = req.POST['password']
            req.session['confirm_password'] = req.POST['confirm_password']
            req.session['email'] = req.POST['email']
            postData = {
                'first_name' : req.session['first_name'],
                'last_name' : req.session['last_name'],
                'password' : req.session['password'],
                'confirm_password' : req.session['confirm_password'],
                'email' : req.session['email']
                }
            user = UserName.objects.register(postData)
            #in the case of Log In
        else:
            req.session['password'] = req.POST['password']
            req.session['email'] = req.POST['email']
            postData = {
                'password' : req.session['password'],
                'email' : req.session['email']
                }
            user = UserName.objects.login(postData)
        if 'error' in user:
            context = { 'error' : user}
            return render(req, 'secrets_app/index.html', context)
        #Pass the login or register message in user and pass user through session
        else:
            secrets = Secret.objects.all().order_by(Coalesce('updated_at','created_at').desc())
            likeslst = Like.objects.filter(user=user['user'].id).values_list("like", flat=True)
            context = {
                'user' : user['user'],
                'message': user['message'],
                'secrets' : secrets,
                'likeslst' : likeslst
            }
            return render(req, 'secrets_app/secrets.html', context)
    else:
        return redirect('/')

def postSecret(req, id):
    thisUser = UserName.objects.get(id=id)
    Secret.objects.create(
        secret = req.POST['secret'],
        username = thisUser
    )
    context = createContext(id)
    return render(req, 'secrets_app/secrets.html', context)

def like(req, sid, uid):
    thisSecret = Secret.objects.get(id=sid)
    thisUser = UserName.objects.get(id=uid)
    Like.objects.create(
        user = thisUser,
        like = thisSecret
        )
    context = createContext(uid)
    return render(req, 'secrets_app/secrets.html', context)

def delete(req, sid, uid):
    thisUser = UserName.objects.get(id=uid)
    Secret.objects.filter(id=sid).delete()
    context = createContext(uid)
    return render(req, 'secrets_app/secrets.html', context)

def logout(req):
    req.session['first_name'] = ""
    req.session['last_name'] = ""
    req.session['password'] = ""
    req.session['confirm_password'] = ""
    req.session['email'] = ""
    req.session['id'] = ""
    return redirect('/')

def popular(req, id):
    thisUser = UserName.objects.get(id=id)
    #create a list of secrets ordered by the number of likes
    secrets = Secret.objects.all().annotate(count_of_likes=Count('likes')).order_by('-count_of_likes')
    # secrets = Secret.objects.all().order_by(Coalesce('updated_at','created_at').desc())
    likeslst = Like.objects.filter(user=id).values_list("like", flat=True)
    context = {
        'user' : thisUser,
        'secrets' : secrets,
        'likeslst': likeslst
    }
    return render(req, 'secrets_app/popular.html', context)

def goback(req, id):
    context = createContext(id)
    return render(req, 'secrets_app/secrets.html', context)
