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
                if inputNum % primeList[count] == 0:
                    return False
    return isPrime

# print isPerfectSquare(121)

def isPerfectSquare2(num):
    counter = 1
    while num >= 0:
        if num == 0:
            return True
        num -= counter
        counter += 2;
    if num < 0:
        return False

# print isPerfectSquare2(121)
primeList = []
#build primeList
for count in range(1, 100):
    if isItPrime(count, primeList):
        primeList.append(count)

for count in range(100, 100001):
    print count,
    if isItPrime(count, primeList):
        primeList.append(count)
        print "Foo"
    elif isPerfectSquare2(count):
        print "Bar"
    else: print "FooBar"
