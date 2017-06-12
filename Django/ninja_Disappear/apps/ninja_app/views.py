from django.shortcuts import render

def index(request):
    return render(request, 'ninja_app/index.html')

def ninjas(request):
    return render(request, 'ninja_app/ninjas.html')

def ninja_color(request, color):
    context = {
        "color" : color
    }
    return render(request, 'ninja_app/ninjas.html', context)
