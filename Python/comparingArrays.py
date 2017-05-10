#Function to test if two lists are identical
#First test the length of each list the iterate through and compare each item
def areSame(list_one, list_two):
    if len(list_one) != len(list_two):
        return False
    else:
        for count in range(0, len(list_one)):
            if list_one[count] != list_two[count]:
                return False
        return True

def printResult(identical):
    if identical:
        print "The lists are the same."
    else: print "The lists are not the same."

list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
printResult(areSame(list_one, list_two)) #call our function passing both lists
#Then call the print results to print the outcome

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
printResult(areSame(list_one, list_two)) #call our function passing both lists
#Then call the print results to print the outcome

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
printResult(areSame(list_one, list_two)) #call our function passing both lists
#Then call the print results to print the outcome

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
printResult(areSame(list_one, list_two)) #call our function passing both lists
#Then call the print results to print the outcome

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','milk']
printResult(areSame(list_one, list_two)) #call our function passing both lists
#Then call the print results to print the outcome
