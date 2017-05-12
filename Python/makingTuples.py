my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def printDict(myDict):
    myList = []
    for keynValue in myDict.items():
        myList.append(keynValue)
    return myList

def printDict2(myDict):
    myList = []
    for key, value in myDict.items():
        myTouple = (key,value)
        myList.append(myTouple)
    return myList

print printDict(my_dict)
print printDict2(my_dict)
