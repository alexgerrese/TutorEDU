# users/serializers.py
from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        # fields = '__all__'
        fields = ('id','email', 'name',
        fields = ('id','email', 'username','name',
        'password', 'university','bio', 'client_rating',
        'is_tutor', 'tutor_rating','hourly_rate','availabilities'
        )

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Subject
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = '__all__'
