from django.shortcuts import render, redirect
import random
VALUES = ['Cupcakes', "Donky Kong", 'Bicycles', 'Weapons', 'Teachers', 'Students', 'People', 'Cars', 'Trucks', 'Shoes']

def index(request):
    return render(request, 'surpriseMe_app/index.html')

def results(request):
    if request.method == 'POST':
        random.shuffle(VALUES)
        number = int(request.POST['number'])
        value_lst = []
        for i in range(0, number):
            value_lst.append(VALUES[i])
        context = {
            "value" : value_lst
        }
        return render(request, 'surpriseMe_app/results.html', context)
    else:
        return redirect('/')
