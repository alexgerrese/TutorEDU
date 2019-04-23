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
<<<<<<< HEAD
        'is_tutor','is_active', 'tutor_rating','hourly_rate','availabilities','image','tutor_appointments','student_appointments' )
=======
        'is_tutor','is_active', 'tutor_rating','hourly_rate','availabilities','image','tutor_appointments','student_appointments','subjects')
>>>>>>> 2b7ae34ed87d7c3c4b9743318a7fb0cf476a340d

class SubjectSerializer(serializers.ModelSerializer):
    subject_appointments = serializers.StringRelatedField(many=True)
    user_subjects = serializers.StringRelatedField(many=True)
    class Meta:
        model = models.Subject
        fields = ('id', 'course_name', 'description','subject_appointments','user_subjects')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = ('id', 'tutor', 'student', 'subject', 'additional_comments', 'date', 'location', 'status', 'rating')
