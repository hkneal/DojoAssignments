# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-15 06:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_app', '0003_auto_20170614_2249'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='author',
        ),
        migrations.AddField(
            model_name='book',
            name='author',
            field=models.ManyToManyField(to='book_app.Author'),
        ),
    ]