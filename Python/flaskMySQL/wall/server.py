from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "ThisIsSecret!"
mysql = MySQLConnector(app,'walldb')

def hasNumbers(strInput):
    return any(char.isdigit() for char in strInput)

def hasUpper(strInput):
    return any(char.isupper() for char in strInput)

def validateName(strInput):
    if len(strInput) < 2:
        return False
    elif not strInput.isalpha():
        return False
    return True

def validateText(strInput):
    if len(strInput) < 1:
        return False
    return True

def queryMessages():
    query = "SELECT users.first_name, users.last_name, messages.created_at AS msg_created_at, messages.message, messages.id AS message_id FROM users JOIN messages ON users.id = messages.user_id ORDER BY msg_created_at desc"
    messages = mysql.query_db(query)
    return messages

def queryComments():
    query = "SELECT comments.comment, comments.created_at AS comment_created_at, comments.message_id AS comment_message_id, users.first_name, users.last_name FROM users JOIN comments ON users.id = comments.user_id ORDER BY comment_created_at desc"
    comments = mysql.query_db(query)
    return comments

def queryUser():
    query = "SELECT first_name FROM users WHERE id = :id"
    data = {'id': session['id'] }
    user = mysql.query_db(query, data)
    return user

@app.route('/', methods=['GET'])
def index():
    session['first_name'] = ""
    session['last_name'] = ""
    session['email'] = ""
    session['password'] = ""
    session['confirm_password'] = ""
    return render_template("index.html")

@app.route('/register', methods=['POST'])
def submit():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']
    session['password'] = request.form['password']
    session['confirm_password'] = request.form['confirm_password']
    #validate the input starting with first_name
    if not validateName(session['first_name']):
        #Create an errors array and push the error messages, check if errors at end
        flash("First name cannot be less than 2 characters and cannot contain numbers or symbols!", 'error')
        return render_template("index.html")
    elif not validateName(session['last_name']):
        flash("Last name cannot be less than 2 characters and cannot contain numbers or symbols!!", 'error')
        return render_template("index.html")
    elif len(session['email']) < 1:
        flash("Email cannot be blank!", 'error')
        return render_template("index.html")
    # else if email doesn't match regular expression display an "invalid email address" message
    elif not EMAIL_REGEX.match(session['email']):
        flash("Invalid Email Address!", 'error')
        return render_template("index.html")
    elif len(session['password']) < 8:
        flash("Password should be at least 8 characters!", 'error')
        return render_template("index.html")
    elif not hasNumbers(session['password']):
        flash("Password should contain at least 1 number!", 'error')
        return render_template("index.html")
    elif not hasUpper(session['password']):
        flash("Password should contain at least 1 Uppercase letter!", 'error')
        return render_template("index.html")
    elif session['password'] != session['confirm_password']:
        flash("The Password and Confirm Password fields must match!", 'error')
        return render_template("index.html")
    else:
        pw_hash = bcrypt.generate_password_hash(session['password'])
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:first_name, :last_name, :email, :password, NOW(), NOW())"
        data = {
                 'first_name': session['first_name'],
                 'last_name':  session['last_name'],
                 'email': session['email'],
                 'password': pw_hash
               }
        mysql.query_db(query, data)
        flash("Success! You have successfully registered! You may now log in", "ok")
        return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    email = request.form['email']
    password = request.form['password']
    if len(email) < 1 or not EMAIL_REGEX.match(email):
        flash("Invalid Email Address!", 'error')
        return render_template('index.html')
    elif len(password) < 2:
        flash("Password should be at least 8 characters!", 'error')
        return render_template('index.html', invalidName=True)
    else:
        query = "SELECT * FROM users WHERE email = :email LIMIT 1"
        data = { 'email': email}
        user = mysql.query_db(query, data)
        if len(user) < 1:
            flash("You must register first!", 'error')
            return render_template('index.html')
        elif bcrypt.check_password_hash(user[0]['password'], password):
            messages = queryMessages()
            comments = queryComments()
            username = user[0]['first_name']
            session['id'] = user[0]['id']
            return render_template('wall.html', username=username, messages=messages, comments=comments)
        else:
            flash("The Password You Entered is Incorrect!", 'error')
            return render_template("index.html")

@app.route('/<id>/addMsg', methods=['POST'])
def createMsg(id):
    message = request.form['message']
    if not validateText(message):
        flash('You must enter in at least one character in order to post a message', 'error')
        user = queryUser()
        username = user[0]['first_name']
        messages = queryMessages()
        comments = queryComments()
        return render_template("wall.html", username=username, messages=messages, comments=comments)
    else:
        query = "INSERT INTO messages (message, created_at, updated_at, user_id) VALUES (:message, NOW(), NOW(), :user_id)"
        data = {
                 'message': message,
                 'user_id': id
               }
        mysql.query_db(query, data)
        query = "SELECT first_name FROM users WHERE id = :id"
        data = {'id': id }
        user = mysql.query_db(query, data)
        username = user[0]['first_name']
        messages = queryMessages()
        comments = queryComments()
        return render_template("wall.html", username=username, messages=messages, comments=comments)

@app.route('/<msgid>/addComment', methods=['POST'])
def addComment(msgid):
    comment = request.form['comment']
    if not validateText(comment):
        flash('You must enter in at least one character in order to make a comment', 'error')
        user = queryUser()
        username = user[0]['first_name']
        messages = queryMessages()
        comments = queryComments()
        return render_template("wall.html", username=username, messages=messages, comments=comments)
    else:
        query = "INSERT INTO comments (comment, created_at, updated_at, user_id, message_id) VALUES (:comment, NOW(), NOW(), :user_id, :message_id)"
        data = {
                 'comment': comment,
                 'user_id': session['id'],
                 'message_id': msgid
               }
        mysql.query_db(query, data)
        user = queryUser()
        username = user[0]['first_name']
        messages = queryMessages()
        comments = queryComments()
        return render_template("wall.html", username=username, messages=messages, comments=comments)

app.run(debug=True)
