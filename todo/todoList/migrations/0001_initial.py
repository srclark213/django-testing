# -*- coding: utf-8 -*-
# Generated by Django 1.10.2 on 2016-10-30 00:24
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='List',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('creationDate', models.DateTimeField(verbose_name='creation date')),
                ('archive', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='ListItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.CharField(blank=True, max_length=500, null=True)),
                ('completion', models.BooleanField(default=False)),
                ('order', models.PositiveSmallIntegerField()),
                ('list_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='todoList.List')),
            ],
        ),
    ]
