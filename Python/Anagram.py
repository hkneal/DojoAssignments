def isAnagram(myString, testString):
    myString = myString.replace(" ", "")
    testString = testString.replace(" ", "")
    if len(myString) != len(testString):
        return False
    else:
        return sorted(myString) == sorted(testString)


myString = "geeksfor geeks"
testString = "forgeeksgeeks"
myString2 = "rail safety"
testString2 = "fairy  tales "


print isAnagram(myString, testString)
print isAnagram(myString2, testString2)

# myStringList = [c for c in myString]
# testStringList = [c for c in testString]
# testStringList = list(testString)
# myStringList = list(myString)
