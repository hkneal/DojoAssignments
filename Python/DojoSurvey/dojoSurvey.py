from flask import Flask, render_template, request, redirect, flash, session
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survey():
    print "Into /result Now"
    if len(request.form['name']) < 1:
        flash("Name field cannot be empty")
        return redirect('/')
    if len(request.form['comment']) < 1:
        flash("Comment field cannot be empty")
        return redirect('/')
    if len(request.form['comment']) > 120:
        flash("The comment field cannot be greater than 120 characters.")
        return redirect('/')
    return render_template("/result.html", name = request.form['name'],
    location = request.form['location'],
    favLang = request.form['favLang'],
    comments = request.form['comment'])

app.run(debug=True)
