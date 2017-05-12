myFunFacts = {"fName":"Hiram", "lName":"Neal", "age":35, "birthCountry":"Italy", "favLang":"JavaScript"}

def getFunFacts(ourDict):
    print "My name is", ourDict["fName"], ourDict["lName"]
    print "My age is", ourDict["age"]
    print "My country of birth is", ourDict["birthCountry"]
    print "My favorite language is", ourDict["favLang"]

getFunFacts(myFunFacts)

# for key, value in myFunFacts.items():
#     print key, value
