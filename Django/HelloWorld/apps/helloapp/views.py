from django.shortcuts import render, HttpResponse

def index(request):
    # response = "Hello, I am your first request!"
    # return HttpResponse(response)
    return render(request, 'helloapp/index.html')

# Create your views here.
