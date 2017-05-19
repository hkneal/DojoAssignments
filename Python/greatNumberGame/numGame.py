import random
from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'hmmNumSecretkeY'

@app.route('/')
def frontPage():
    session['randNum'] = random.randrange(0,101)
    session['guessedLow'] = False
    session['guessedHigh'] = False
    session['guessedRight'] = False
    # print session['randNum']
    return render_template("frontPage.html")

@app.route('/checkGuess', methods=['POST'])
def checkGuess():
    print "Got into /checkGuess"
    numGuessed = int(request.form['numGuessed'])
    print numGuessed
    if numGuessed < session['randNum']:
        # print "Going to print Too Low"
        session['guessedLow'] = True
        session['guessedHigh'] = False
    elif numGuessed > session['randNum']:
        # print "Going to print Too Low"
        session['guessedHigh'] = True
        session['guessedLow'] = False
    elif numGuessed == session['randNum']:
        session['guessedRight'] = True
        session['guessedLow'] = False
        session['guessedHigh'] = False
    return render_template("frontPage.html", numGuessed=numGuessed)

app.run(debug=True)
