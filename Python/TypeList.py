#Used the same input to test this as filter project
sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']
myList = [sI, mI, bI, eI, spI, sS, mS, bS, eS, aL, mL, lL, eL, spL]
isMixed = False
firstType = type(myList[0])
sum = 0
listSize = 0
myString = ""
for count in range(0, len(myList)):
    if type(myList[count]) != firstType:
        isMixed = True
    if type(myList[count]) == int:
        sum += myList[count]
    elif type(myList[count]) == str:
        myString += " " + myList[count]
    elif type(myList[count]) == list:
        listSize += len(myList[count])
if isMixed:
    print "The array you entered is of mixed type"
    print "String: " + myString
    print "Sum: " + str(sum)
    if listSize > 0:
        print "The total number of list items is: " + str(listSize)
elif isMixed == False:
     if firstType == int:
         print '"The array you entered is of int type"'
         print "Sum: " + str(sum)
     elif firstType == str:
         print '"The array you entered is of String type"'
         print "String: " + myString
     elif firstType == list:
         print '"The array you entered is of List type"'
         print "The total number of list items is: " + str(listSize)
