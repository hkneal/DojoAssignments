from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def survey():
    print "Into /result Now"
    return render_template("/result.html", name = request.form['name'],
    location = request.form['location'],
    favLang = request.form['favLang'],
    comments = request.form['comment'])

app.run(debug=True)
