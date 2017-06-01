from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'full_friends')

def validateName(strInput):
    if len(strInput) < 1:
        return False
    elif not strInput.isalpha():
        return False
    return True

@app.route('/')
def index():
    session['fname'] = ""
    session['lname'] = ""
    session['email'] = ""
    query = "SELECT * FROM friends"
    friend_list = mysql.query_db(query)
    return render_template('index.html', friend_list=friend_list)

@app.route('/friends', methods=['POST'])
def create():
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['email'] = request.form['email']
    if len(session['email']) < 1 or not EMAIL_REGEX.match(session['email']):
        return render_template('index.html', invalidAddress=True)
    elif not (validateName(session['fname']) and validateName(session['lname'])):
        return render_template('index.html', invalidName=True)
    else:
        query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
        data = {
                 'first_name': session['fname'],
                 'last_name':  session['lname'],
                 'email': session['email']
               }
        mysql.query_db(query, data)
        query = "SELECT * FROM friends"
        friend_list = mysql.query_db(query)
        return render_template('index.html', friend_list=friend_list)

@app.route('/friends/<id>/edit')
def edit(id):
    query = "SELECT * FROM friends WHERE id = :specific_id"
    data = {'specific_id': id}
    friends = mysql.query_db(query, data)
    # Friends should be a list with a single object,
    # so we pass the value at [0] to our template under alias one_friend.
    return render_template('editfriend.html', friend=friends[0])

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    session['fname'] = request.form['fname']
    session['lname'] = request.form['lname']
    session['email'] = request.form['email']
    if len(session['email']) < 1 or not EMAIL_REGEX.match(session['email']):
        return render_template('index.html', invalidAddress=True)
    elif not (validateName(session['fname']) and validateName(session['lname'])):
        return render_template('index.html', invalidName=True)
    else:
        query = "UPDATE friends SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
        data = {
                 'first_name': session['fname'],
                 'last_name':  session['lname'],
                 'email': session['email'],
                 'id': id
               }
        mysql.query_db(query, data)
        return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    query = "DELETE FROM friends WHERE id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
