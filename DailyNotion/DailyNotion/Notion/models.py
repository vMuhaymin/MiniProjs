from django.db import models

# Create your models here.

class Note(models.Model):
    id = models.AutoField(primary_key=True)
    term = models.IntegerField(null=True, blank=True)  # <- allow empty
    subject= models.CharField(max_length=50)
    material = models.CharField(max_length=100)
    time_studied = models.CharField(default=0)
    start_time = models.CharField()
    finish_time = models.CharField()
    day = models.CharField(max_length=20)
    date = models.CharField()
    notes = models.TextField(blank=True)


