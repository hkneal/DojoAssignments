#odd_even function
def odd_even():
    for count in range(1, 2001):
        if count % 2 == 0:
            print "Number is " + str(count) + ".  This is an even number."
        else: print "Number is " + str(count) + ".  This is an odd number."

#calling odd_even
odd_even()

#multiply function
def multiply(inputList, multiplier):
    for count in range(0, len(inputList)):
        inputList[count] *= multiplier
    return inputList

a = [2,4,10,16]
b = multiply(a, 5)
print b

#Hacker Challenge
def layered_multiples(arr):
    new_array = []
    for count in range(0,len(arr)):
        myList = []
        for v in range(0,arr[count]):
            myList.append(1)
        new_array.append(myList)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
