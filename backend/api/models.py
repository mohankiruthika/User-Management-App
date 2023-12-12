from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(unique=True,max_length=100)
    email = models.EmailField()
    role = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    
    def __str__(self):
        return self.username