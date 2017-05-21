from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def beginIt():
    return render_template("index.html")

@app.route('/ninjas')
def ninjas_profile():
    return render_template("ninja.html")

@app.route('/ninja')
def ninja_profile():
    return render_template("ninja.html")

@app.route('/ninja/<color>')
def show_user_profile(color):
    return render_template("ninja.html", color=color)

@app.route('/ninjas/<color>')
def show_user_profile2(color):
    return render_template("ninja.html", color=color)
app.run(debug=True)
