from __future__ import unicode_literals

from django.db import models
import re
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

class UserManager(models.Manager):
    def register(self, postData):
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
        elif len(postData['password']) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif postData['password'] != postData['confirm_password']:
            return { 'error' : 'Password and Confirm Password must match'}
        else:
            user = UserName.objects.create(
                first_name = postData['first_name'],
                last_name = postData['last_name'],
                email = postData['email'],
                password = postData['password']
            )
            return {
                'user':user,
                'message': "Thank You For Registering!"
                }

    def login(self, postData):
        if not EMAIL_REGEX.match(postData['email']):
            return { 'error' : 'Please enter a valid email address'}
        elif len(postData['email']) < 7:
            return { 'error' : 'Email address must contain at least 7 characters in a proper email format eg. a@a.net '}
        elif UserName.objects.filter(email = postData['email']).count() < 1:
            return { 'error' : 'You must first register!'}
        elif len(postData['password']) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif UserName.objects.get(email = postData['email']).password != postData['password']:
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
    password = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
