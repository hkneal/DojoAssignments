from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'emaildb')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/success', methods=['POST'])
def valid():
    emailAddress = request.form['email']
    if len(emailAddress) < 1 or not EMAIL_REGEX.match(emailAddress):
        return render_template('index.html', invalidAddress=True)
    else:
        query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
        data = {
                 'email': emailAddress
               }
        #Insert the new email address
        mysql.query_db(query, data)
        #refresh query with a list of all emails
        query = "SELECT * FROM emails"
        addresses = mysql.query_db(query)
        return render_template('success.html', addresses=addresses, emailAddress=emailAddress)

@app.route('/delete', methods=['POST'])
def deleteIt():
    keyNum = request.form['idNum']
    if len(keyNum) < 1:
        flash("ID number cannot be blank!")
        query = "SELECT * FROM emails"
        addresses = mysql.query_db(query)
        return render_template('success.html', addresses=addresses, deleteMe=True)
    else:
        query = "DELETE FROM emails WHERE id = :id"
        data = {'id': keyNum}
        mysql.query_db(query, data)
        query = "SELECT * FROM emails"
        addresses = mysql.query_db(query)
        return render_template('success.html', addresses=addresses, lineNumber=keyNum, deleteMe=True)

app.run(debug=True)
