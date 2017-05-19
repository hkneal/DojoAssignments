from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'hmmTheSecretkeY'

@app.route('/')
def homePage():
    try:
        session['counter'] = session['counter'] + 1
    except:
        session['counter'] = 1
    return render_template("homepage.html")

@app.route('/addtwo')
def addTwo():
    try:
        session['counter'] = session['counter'] + 1
    except:
        session['counter'] = 1
    return redirect("/")

@app.route('/reset')
def resetIt():
    session['counter'] = 0
    return redirect("/")

app.run(debug=True)
