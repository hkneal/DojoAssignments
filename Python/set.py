myList = [3,56,"Hiram", 3, 4, 7, 0, "Hiram", 3]

# myList = set(myList)
# for item in myList:
#     print item,


def removeDupes(myList):
    for i in range(0, len(myList)):
        j= i+1
        while j < len(myList):
            if myList[j] == myList[i]:
                myList.pop(j)
            j += 1
    for item in myList:
        print item,

removeDupes(myList)
