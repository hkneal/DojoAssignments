import random, datetime
from flask import Flask, redirect, request, session, render_template
app = Flask(__name__)
app.secret_key = 'ninjaSecretkeY'

@app.route('/')
def frontP():
    session['gold'] = 0
    session['log'] = [{}]
    return render_template("ninja.html")

def getDateTime():
    timeEarned = datetime.time(1, 2, 3)
    dateEarned = datetime.date.today()
    dateEarned = datetime.datetime.combine(dateEarned, timeEarned)
    return dateEarned

def earnedGold(building, randNum):
    dateEarned = getDateTime()
    session['gold'] += randNum
    if building == 'casino':
        session['log'].append({'logdata':"Entered a casino and won " + str(randNum) + " Yeah! (" + str(dateEarned) + ")",
        'earnedGold': True })
    else: session['log'].append({ 'logdata':"You earned " + str(randNum) + " gold from the " + building + " (" + str(dateEarned) + ")",
    'earnedGold': True })

def lostGold(building, randNum):
    dateEarned = getDateTime()
    session['gold'] -= randNum
    session['log'].append({'logdata':"Entered a casino and lost " + str(randNum) + " Ouch! (" + str(dateEarned) + ")",
    'earnedGold': False })

@app.route('/process_money', methods=['POST'])
def processM():
    # print "Inside of processM"
    thisType = request.form['earntype']
    # print thisType
    if thisType == 'farm':
        randNum = random.randrange(10,21)
        earnedGold(thisType, randNum)

    elif thisType == 'cave':
        randNum = random.randrange(5,11)
        earnedGold(thisType, randNum)

    elif thisType == 'house':
        randNum = random.randrange(2,6)
        earnedGold(thisType, randNum)

    elif thisType == 'casino':
        randNum = random.randrange(0,51)
        if random.randrange(0,3) == 1:
            earnedGold(thisType, randNum)
        else:
            lostGold(thisType, randNum)

    if session['gold'] < 0:
        session['gold'] = 0

    return render_template("ninja.html")

app.run(debug=True)
