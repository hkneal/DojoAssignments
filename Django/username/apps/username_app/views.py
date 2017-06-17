from django.shortcuts import render, redirect
from .models import UserName

# Create your views here.
def index(req):
    if req.method == 'POST':
        postData = req.POST['username']
        user = UserName.objects.login(postData)
        if 'error' in user:
            print user
            context = { 'error': user }
            print context
            return render(req, 'username_app/index.html', context)
        else:
            users = UserName.objects.all()
            context = {
                'username': user,
                'users' : users
                }
            return render(req, 'username_app/success.html', context)
    else:
        return render(req, 'username_app/index.html')
