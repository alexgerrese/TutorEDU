# users/serializers.py
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from . import models
# parsing data from django models to json format -- uses rest framework

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Appointment
        fields = ('id', 'tutor', 'student', 'subject', 'additional_comments', 'availabilities', 'is_active','date', 'location', 'status', 'rating')

class SubjectSerializer(serializers.ModelSerializer):
    subject_appointments = AppointmentSerializer(many=True,required=False)
    user_subjects = serializers.StringRelatedField(many=True,required=False)
    class Meta:
        model = models.Subject
        fields = ('id', 'course_name', 'description','subject_appointments','user_subjects')

class UserSerializer(serializers.ModelSerializer):
    tutor_appointments = AppointmentSerializer(many=True,required=False)
    student_appointments = AppointmentSerializer(many=True,required=False)
    subjects = SubjectSerializer(many=True,required=False)

    class Meta:
        model = models.CustomUser
        fields = ('id','email', 'username','name',
        'password', 'university','bio', 'client_rating',
        'is_tutor','is_active', 'tutor_rating','hourly_rate','availabilities','image','tutor_appointments','student_appointments','subjects')
        write_only_fields = ('password',)
        read_only_fields = ('id',)

class UserSerializerWithToken(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    tutor_appointments = AppointmentSerializer(many=True,required=False)
    student_appointments = AppointmentSerializer(many=True,required=False)
    subjects = SubjectSerializer(many=True,required=False)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = models.CustomUser
        fields = ('token','id','email', 'username','name',
        'password', 'university','bio', 'client_rating',
        'is_tutor','is_active', 'tutor_rating','hourly_rate',
        'availabilities','image','tutor_appointments',
        'student_appointments','subjects')
        read_only_fields = ('id',)
