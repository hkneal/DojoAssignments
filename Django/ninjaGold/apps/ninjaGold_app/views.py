from django.shortcuts import render, redirect
import random, datetime

def index(request):
    if request.session['gold']:
        pass
    else:
        request.session['gold'] = 0
        request.session['log'] = []
    return render(request, 'ninjaGold_app/ninja.html')

def getDateTime():
    timeEarned = datetime.time(1, 2, 3)
    dateEarned = datetime.date.today()
    dateEarned = datetime.datetime.combine(dateEarned, timeEarned)
    return dateEarned

def earnedGold(request, building, randNum):
    dateEarned = getDateTime()
    request.session['gold'] += randNum
    if building == 'casino':
        request.session['log'].append({'logdata':"Entered a casino and won " + str(randNum) + " Yeah! (" + str(dateEarned) + ")",
        'earnedGold': True })
    else: request.session['log'].append({ 'logdata':"You earned " + str(randNum) + " gold from the " + building + " (" + str(dateEarned) + ")",
    'earnedGold': True })

def lostGold(request, building, randNum):
    dateEarned = getDateTime()
    request.session['gold'] -= randNum
    request.session['log'].append({'logdata':"Entered a casino and lost " + str(randNum) + " Ouch! (" + str(dateEarned) + ")",
    'earnedGold': False })

def processFarm(request):
    if request.method == 'POST':
        randNum = random.randrange(10,21)
        earnedGold(request, 'farm', randNum)
        return redirect('/')
    else:
        return redirect('/')

def processCave(request):
    if request.method == 'POST':
        randNum = random.randrange(5,11)
        earnedGold(request, 'cave', randNum)
        return redirect('/')
    else:
        return redirect('/')

def processHouse(request):
    if request.method == 'POST':
        randNum = random.randrange(2,6)
        earnedGold(request, 'house', randNum)
        return redirect('/')
    else:
        return redirect('/')

def processCasino(request):
    if request.method == 'POST':
        randNum = random.randrange(0,51)
        if random.randrange(0,3) == 1:
            earnedGold(request, 'casino', randNum)
        else:
            lostGold(request, 'casino', randNum)

        if request.session['gold'] < 0:
            request.session['gold'] = 0
        return redirect('/')
        # return render(request, 'ninjaGold_app/ninja.html')
    else:
        return redirect('/')
