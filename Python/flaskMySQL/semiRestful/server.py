from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'semiRest')

def validateName(strInput):
    if len(strInput) < 1:
        return False
    elif not strInput.isalpha():
        return False
    return True

@app.route('/users')
def index():
    query = "SELECT * FROM users"
    users_list = mysql.query_db(query)
    return render_template('index.html', users_list=users_list)

@app.route('/users/new')
def new():
    session['first_name'] = ""
    session['last_name'] = ""
    session['email'] = ""
    return render_template('newuser.html')

@app.route('/users/create', methods=['POST'])
def create():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    if len(session['email']) < 1 or not EMAIL_REGEX.match(session['email']):
        return render_template('newuser.html', invalidAddress=True)
    elif not (validateName(session['first_name']) and validateName(session['last_name'])):
        return render_template('newuser.html', invalidName=True)
    else:
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW())"
        data = {
                 'first_name': session['first_name'],
                 'last_name':  session['last_name'],
                 'email': session['email']
               }
        mysql.query_db(query, data)
        print "Call to updated happend"
        query = "SELECT * FROM users WHERE first_name = :first_name AND last_name = :last_name AND email = :email LIMIT 1"
        data = { 'email': session['email'],
                 'first_name': session['first_name'],
                 'last_name': session['last_name']
                }
        user = mysql.query_db(query, data)
        id = user[0]['id']
        return redirect('/users/' + str(id))

@app.route('/users/<id>')
def show(id):
    query = "SELECT * FROM users WHERE id = :specific_id"
    data = {'specific_id': id}
    user = mysql.query_db(query, data)
    if user:
        return render_template('show.html', user=user[0])
    else:
        print "THERE IS NO USER"
        return render_template('index.html')

@app.route('/users/<id>/edit')
def edit(id):
    query = "SELECT * FROM users WHERE id = :specific_id"
    data = {'specific_id': id}
    user = mysql.query_db(query, data)
    return render_template('edituser.html', user=user[0])

@app.route('/users/<id>', methods=['POST'])
def update(id):
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    query = "SELECT * FROM users WHERE id = :specific_id"
    data = {'specific_id': id}
    user = mysql.query_db(query, data)
    if len(session['email']) < 1 or not EMAIL_REGEX.match(session['email']):
        return render_template('edituser.html', invalidAddress=True, user=user[0])
    elif not (validateName(session['first_name']) and validateName(session['last_name'])):
        return render_template('edituser.html', invalidName=True, user=user[0])
    else:
        query = "UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email WHERE id = :id"
        data = {
                 'first_name': session['first_name'],
                 'last_name':  session['last_name'],
                 'email': session['email'],
                 'id': id
               }
        mysql.query_db(query, data)
        query = "SELECT * FROM users WHERE first_name = :first_name AND last_name = :last_name AND email = :email LIMIT 1"
        data = { 'email': session['email'],
                 'first_name': session['first_name'],
                 'last_name': session['last_name']
                }
        user = mysql.query_db(query, data)
        id = user[0]['id']
        return redirect('/users/' + str(id))

@app.route('/users/<id>/destroy')
def destroy(id):
    query = "DELETE FROM users WHERE id = :id"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/users')

app.run(debug=True)
