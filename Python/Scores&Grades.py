import random
def generateScore():
    score = random.randint(6, 10) * 10
    if score >= 90:
        return score, "A"
    elif score >= 80:
        return score, "B"
    elif score >= 70:
        return score, "C"
    elif score >= 60:
        return score, "D"
    else: return score, "F"

print "Scores and Grades"
for count in range(0,10):
    myTuple = generateScore()
    print "Score " + str(myTuple[0]) + "; Your grade is " + myTuple[1]
print "End of the program. Bye!"
