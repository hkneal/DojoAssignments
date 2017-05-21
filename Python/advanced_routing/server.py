from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/users/<username>')
def show_user_profile(username):
    return render_template("users.html", username=username)
app.run(debug=True)
