from django.shortcuts import render
# Create your views here.
def index(request):
    user = {
        "first_name": "Hiram",
        "last_name": "Neal"
    }
    context = {
        "user": user
    }
    return render(request, "real_port_app/index.html", context)

def projects(request):
    return render(request, "real_port_app/projects.html")

def about(request):
    return render(request, "real_port_app/about.html")

def testimonies(request):
    return render(request, "real_port_app/testimonies.html")
