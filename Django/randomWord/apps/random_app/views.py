from django.shortcuts import render, redirect
import random, string

def index(request):
    request.session['count'] = 1
    return render(request, 'random_app/index.html')

def generate(request):
    request.session['random_word'] = ''.join([random.choice(string.ascii_letters + string.digits) for n in xrange(14)])
    request.session['count'] += 1
    return render(request, 'random_app/index.html')
# Create your views here.
