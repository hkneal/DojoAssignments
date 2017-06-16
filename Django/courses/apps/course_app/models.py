from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Description(models.Model):
    description = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Course(models.Model):
    course_name = models.CharField(max_length=45)
    description = models.OneToOneField(Description)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Comment(models.Model):
    comment = models.TextField(max_length=1000)
    course = models.ForeignKey(Course)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
