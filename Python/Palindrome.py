def isPalindrome(myString):
        return myString == myString[::-1]

myString = "Alanala"
print isPalindrome(myString.lower())

def isPalindrome2(myString):
        return myString == "".join(reversed(myString))

print isPalindrome2(myString.lower())
