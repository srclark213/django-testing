from __future__ import unicode_literals

from django.db import models

# Create your models here.
class List(models.Model):
    title = models.CharField(max_length=200, blank=True, null=True)
    creationDate = models.DateTimeField('creation date')
    archive = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class ListItem(models.Model):
    list = models.ForeignKey(List, on_delete=models.CASCADE)
    text = models.CharField(max_length=500, blank=True, null=True)
    completion = models.BooleanField(default=False)
    order = models.PositiveSmallIntegerField()

    def __str__(self):
        return self.text