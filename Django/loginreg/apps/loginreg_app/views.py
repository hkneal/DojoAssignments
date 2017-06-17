from django.shortcuts import render, redirect
from .models import UserName
# Create your views here.
def index(req):
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
            return render(req, 'loginreg_app/index.html', context)
        #Pass the login or register message in user and pass user through session
        else:
            context = {
                'user' : user
            }
            return render(req, 'loginreg_app/success.html', context)
    else:
        return render(req, 'loginreg_app/index.html')
