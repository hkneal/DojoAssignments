from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "port_app/index.html")

def testimonies(request):
    return render(request, "port_app/testimonies.html")

# Create your views here.
