from django.db import models

# Create your models here.

class Note(models.Model):
    id = models.AutoField(primary_key=True)
    term = models.IntegerField()
    subject= models.TextField(max_length=50)
    material = models.TextField(max_length=100)
    time_studied = models.PositiveIntegerField(default=0)
    start_time = models.TimeField()
    finish_time = models.TimeField()
    day = models.CharField(max_length=20)
    date = models.DateField()
    notes = models.TextField(blank=True)
    
    


