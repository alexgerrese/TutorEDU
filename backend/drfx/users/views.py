# users/views.py
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import Http404
from . import models
from . import serializers

@api_view(['GET', 'PUT'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = serializers.UserSerializer(request.user)
    return Response(serializer.data)

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

    def post(self, request, format=None):
        serializer = serializers.UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class SubjectListView(generics.ListCreateAPIView):
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class SubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class AppointmentListView(generics.ListCreateAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete an instance.
    """
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

    def get_object(self, pk):
        try:
            return models.Appointment.objects.get(pk=pk)
        except models.Appointment.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = serializers.AppointmentSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = serializers.AppointmentSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            aptStatus = serializer.data.get('status')
            tutor = serializer.data.get('tutor')
            student = serializer.data.get('student')
            tutorName = models.CustomUser.objects.get(pk=tutor).name
            tutorEmail = models.CustomUser.objects.get(pk=tutor).email
            studentEmail = models.CustomUser.objects.get(pk=student).email
            studentName = models.CustomUser.objects.get(pk=student).name
            if aptStatus.lower() == 'declined':
                message = 'Hi %s, Your request for tutoring has been declined' % (studentName)
            elif aptStatus.lower() == 'confirmed':
                message = 'Hi %s, Your request for tutoring has been accepted.  This is your tutor’s contact information for you to reach out to: \n Name: %s \n Email: %s' % (studentName, tutorName, tutorEmail)
            else:
                return Response(serializer.data)
            subject = 'Update to your Appointment Status'
            from_email = settings.EMAIL_HOST_USER
            recipient_list = [settings.EMAIL_HOST_USER, studentEmail]
            send_mail(subject=subject, message=message, from_email=from_email, recipient_list=recipient_list, fail_silently=False)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
