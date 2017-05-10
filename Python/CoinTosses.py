import random
headCount = 0
tailCount = 0

def tossCoin():
    toss = round(random.random())
    if toss == 0:
        return "head"
    elif toss == 1:
        return "tail"

print "Starting the program..."
for count in range(1, 5001):
    tossResult = tossCoin()
    if tossResult == "head":
        headCount += 1
    else: tailCount += 1
    print "Attempt #" + str(count) + ": Throwing a coin... It's a " + tossResult + "! ... Got " + str(headCount) + " head(s) so far and " + str(tailCount) + " tail(s) so far"
print "Ending the program, Thank you!"
