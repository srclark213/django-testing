# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-30 00:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todoList', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='listitem',
            old_name='list_id',
            new_name='list',
        ),
    ]
