from __future__ import unicode_literals

from django.db import models
import re
# import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

def validateName(strInput):
    if len(strInput) < 8:
        return False
    elif len(strInput) > 26:
        return False
    return True

class UserManager(models.Manager):
    def login(self, postData):
        if not validateName(postData):
            return { 'error' : 'The length of username should greater than 8 characters and less than 26 characters'}
        elif not EMAIL_REGEX.match(postData):
            return { 'error' : 'Please enter a valid email address'}
        else:
            user = UserName.objects.create(
                username = postData
            )
            return {'theuser':user}

# Create your models here.
class UserName(models.Model):
    username = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
