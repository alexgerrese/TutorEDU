# users/models.py
from django.contrib.auth.models import AbstractUser
from .validators import validate_school_email
from django.db import models

class Subject(models.Model):
    id = models.IntegerField(default='5', blank=True, primary_key=True)
    course_name = models.CharField(default='blank', blank=True, max_length=40)
    description = models.CharField(default='blank', blank=True, max_length=2000)

class CustomUser(AbstractUser):
    name = models.CharField(default='blank', blank=True, max_length=40)
    email = models.EmailField(default='blank', unique=True, validators= [validate_school_email])
    university = models.CharField(default='blank', blank=True, max_length=40)
    bio = models.CharField(default='blank', blank=True, max_length=2000)
    client_rating = models.IntegerField(default='5', blank=True)
    is_tutor = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    tutor_rating = models.IntegerField(default='5', blank=True)
    hourly_rate = models.FloatField(null=True, blank=True, default=None)
    availabilities = models.CharField(default='blank', blank=True, max_length=2000)
    image = models.ImageField(upload_to='profile_image', blank=True)
    subjects = models.ManyToManyField(Subject, related_name='user_subjects',blank=True)

    def __str__(self):
        return self.email

class Appointment(models.Model):
    id = models.IntegerField(default='5', blank=True, primary_key=True)
    additional_comments = models.CharField(default='blank', blank=True, max_length=200)
    date = models.DateField(("Date"), auto_now_add=True)
    location = models.CharField(default='blank', blank=True, max_length=40)
    status = models.CharField(default='blank', blank=True, max_length=20)
    is_active = models.BooleanField(default=True)
    rating = models.IntegerField(default='5', blank=True)
    tutor = models.ForeignKey(CustomUser,related_name='tutor_appointments', on_delete=models.CASCADE, null=True,blank=True)
    student = models.ForeignKey(CustomUser,related_name='student_appointments', on_delete=models.CASCADE, null=True,blank=True)
    subject = models.ForeignKey(Subject,related_name='subject_appointments', on_delete=models.CASCADE, null=True, blank=True)
