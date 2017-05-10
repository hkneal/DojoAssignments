strg = "It's thanksgiving day. It's my birthday,too!"
#find the index for the word "day"
start = strg.find("day")
print start
#replace the word day with month
newstr = strg.replace("day", "month",1)
print newstr

x = [2,54,-2,7,12,98,13,4,0,-100,1000]
minNum = min(x)
maxNum = max(x)
print "The min number is:" + str(minNum) + " And the Max number is:" + str(maxNum)

listA = ["hello",2,54,-2,7,12,98,"world"]
first = listA[0]
last = listA[len(listA)-1]
combo = [first, last]
print combo

theList = [19,2,54,-2,7,12,98,32,10,-3,6]
theList.sort()
print theList
#determine the halfway point of our list
num = len(theList) / 2
myList = []
for count in range(0, num):
    myList.append(theList[count])
    theList.pop(0)
theList.insert(0,myList)
print theList
