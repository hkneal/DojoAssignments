from __future__ import unicode_literals

from django.db import models
import re, bcrypt
# import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

def validateName(strInput):
    if len(strInput) < 2:
        return False
    elif len(strInput) > 45:
        return False
    elif not strInput.isalpha():
        return False
    return True

def hasNumbers(strInput):
    return any(char.isdigit() for char in strInput)

def hasUpper(strInput):
    return any(char.isupper() for char in strInput)

class UserManager(models.Manager):
    def register(self, postData):
        password = postData['password']
        if not validateName(postData['first_name']):
            return { 'error' : 'First name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols'}
        elif not validateName(postData['last_name']):
            return { 'error' : 'Last name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols'}
        elif not EMAIL_REGEX.match(postData['email']):
            return { 'error' : 'Please enter a valid email address'}
        elif len(postData['email']) < 7:
            return { 'error' : 'Email address must contain at least 7 characters in a proper email format eg. a@a.net '}
        elif UserName.objects.filter(email = postData['email']).count() >= 1:
            return { 'error' : 'This email address is already registered!'}
        elif len(password) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif not hasNumbers(password):
            return { 'error' : "Password should contain at least 1 number!"}
        elif not hasUpper(password):
            return { 'error' : "Password should contain at least 1 Uppercase letter!"}
        elif password != postData['confirm_password']:
            return { 'error' : 'Password and Confirm Password must match'}
        else:
            hashed_pw = bcrypt.hashpw(password.encode(encoding="utf-8", errors="strict"), bcrypt.gensalt())
            user = UserName.objects.create(
                first_name = postData['first_name'],
                last_name = postData['last_name'],
                email = postData['email'],
                password = hashed_pw
            )
            return {
                'user':user,
                'message': "Thank You For Registering!"
                }

    def login(self, postData):
        password = postData['password']
        hashed_pw = UserName.objects.get(email = postData['email']).password
        if not EMAIL_REGEX.match(postData['email']):
            return { 'error' : 'Please enter a valid email address'}
        elif len(postData['email']) < 7:
            return { 'error' : 'Email address must contain at least 7 characters in a proper email format eg. a@a.net '}
        elif UserName.objects.filter(email = postData['email']).count() < 1:
            return { 'error' : 'You must first register!'}
        elif len(postData['password']) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif not hasNumbers(password):
            return { 'error' : "Password should contain at least 1 number!"}
        elif not hasUpper(password):
            return { 'error' : "Password should contain at least 1 Uppercase letter!"}
        elif bcrypt.hashpw(password.encode(encoding="utf-8", errors="strict"), hashed_pw.encode(encoding="utf-8", errors="strict")) != hashed_pw:
            return { 'error' : 'Incorrect password!'}
        else:
            user = UserName.objects.get(email = postData['email'])
            return {
                'user':user,
                'message' : "You Have Successfully Logged In!"
                }

# Create your models here.
class UserName(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class Secret(models.Model):
    secret = models.TextField(max_length=3000)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    username = models.ForeignKey(UserName, related_name="secrets")

class Like(models.Model):
    user = models.ForeignKey(UserName, related_name="users")
    like = models.ForeignKey(Secret, related_name="likes", null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
