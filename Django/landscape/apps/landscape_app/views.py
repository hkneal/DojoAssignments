from django.shortcuts import render, redirect

def isItPrime(inputNum, primeList):
    primeListLen = len(primeList)
    lastDigit = inputNum % 10
    isPrime = True
    if inputNum == 5:
        return True
    if lastDigit == 5:
        return False
    if inputNum == 2:   #if testing less than 100
        return True
    if inputNum < 2:
        return False
    if inputNum ==3:
        return True
    elif inputNum % 3 == 0 or inputNum % 2 == 0:
        return False
    else:
        if len(primeList) > 0:
            for count in range(primeListLen):
                if inputNum == primeList[count]:
                    return True
                if inputNum % primeList[count] == 0:
                    return False

    return isPrime

def index(request):
    return render(request, 'landscape_app/index.html')

def show(request, number):
    primeList = []
    #build primeList
    for count in range(1, 100):
        if isItPrime(count, primeList):
            primeList.append(count)
    context = {
        "number" : int(number),
        "isPrime" : False
    }
    if isItPrime(context['number'], primeList):
        context['isPrime'] = True
    if context['number'] > 50 or context['number'] < 1:
        context['message'] = 'Number Error'
        return render(request, 'landscape_app/index.html', context)
    else:
        print context['isPrime']
        print primeList
        return render(request, 'landscape_app/landscape.html', context)
