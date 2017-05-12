#Begining lists
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "Kevin"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", "zebras", "dogs"]

#makes a touple from two strings
def make_Touple(str1, str2):
    myTouple = (str1, str2)
    return myTouple

#makes a dictionary whith two uneven sized lists
def make_dictUneven(arr1, arr2):
    new_dict = {}
    arr1len = len(arr1) 
    arr2len = len(arr2)
    myList = []
    for count in range(arr2len):
        myList.append(make_Touple(arr1[count], arr2[count]))
    for count2 in range(count + 1, arr1len):
        myList.append(make_Touple(arr1[count2], ""))
    new_dict = dict(myList)
    return new_dict

#makes a dictionary out of two lists
def make_dict(arr1, arr2):
    new_dict = {}
    arr1len = len(arr1)
    arr2len = len(arr2)
    if arr1len == arr2len:
        new_dict = zip(arr1, arr2)
        new_dict = dict(new_dict)
    elif arr1len > arr2len:
        new_dict = make_dictUneven(arr1, arr2)
    elif arr2len > arr1len:
        new_dict = make_dictUneven(arr2, arr1)
    return new_dict

print make_dict(name,favorite_animal)
