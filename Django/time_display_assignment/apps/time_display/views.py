from django.shortcuts import render
import datetime, time
from time import strftime

def index(request):
    time = {
    "current_Date" : datetime.datetime.now().strftime("%b %d, %Y"),
    "current_Time" : datetime.datetime.now().strftime("%I:%M %p")
    }
    context = {
    "time" : time
    }
    return render(request, 'time_display/index.html', context)

# Create your views here.
