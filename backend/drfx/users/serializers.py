# users/serializers.py
from rest_framework import serializers
from . import models
# parsing data from django models to json format -- uses rest framework
class UserSerializer(serializers.HyperlinkedModelSerializer):
    tutor_appointments = serializers.StringRelatedField(many=True)
    student_appointments = serializers.StringRelatedField(many=True)
    class Meta:
        model = models.CustomUser
        fields = ('id','email', 'username','name',
        'password', 'university','bio', 'client_rating',
        'is_tutor','is_active', 'tutor_rating','hourly_rate','availabilities','image','tutor_appointments','student_appointments')

class SubjectSerializer(serializers.ModelSerializer):
    subject_appointments = serializers.StringRelatedField(many=True)
    class Meta:
        model = models.Subject
        fields = ('id', 'course_name', 'description','subject_appointments')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = ('id', 'tutor', 'student', 'subject', 'additional_comments', 'date', 'location', 'status', 'rating')
