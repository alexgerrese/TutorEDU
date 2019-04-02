# users/serializers.py
from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = ('id','email', 'name',
        'password', 'university','bio', 'client_rating',
        'is_tutor', 'tutor_rating','hourly_rate','availabilities')

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subject
        fields = ('id', 'course_name', 'description')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = ('id', 'tutor_id', 'client_id', 'course_id', 'additional_comments', 'date', 'location', 'status', 'rating')
