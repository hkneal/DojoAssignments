# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-20 05:23
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('secrets_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='secret',
            old_name='likes',
            new_name='like',
        ),
    ]