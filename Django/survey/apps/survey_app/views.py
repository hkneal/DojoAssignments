from django.shortcuts import render, redirect

def index(request):
    request.session['count'] = 0
    return render(request, 'survey_app/index.html')

def process(request):
    if request.method == 'POST':
        request.session['name'] = request.POST['name']
        request.session['location'] = request.POST['location']
        request.session['favlang'] = request.POST['favlang']
        request.session['comment'] = request.POST['comment']
        request.session['count'] += 1
        return redirect('/results')
    else:
        return redirect('/')

def results(request):
    return render(request, 'survey_app/results.html')

def goback(request):
    return render(request, 'survey_app/index.html')

# Create your views here.
