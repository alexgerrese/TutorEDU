# users/views.py
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from django.http import Http404
from . import models
from . import serializers

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """

    serializer = serializers.UserSerializer(request.user)
    return Response(serializer.data)

# receivin
class UserListView(generics.ListCreateAPIView): #for users page
# displaying models from backend
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView): #for a single user
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class SubjectListView(generics.ListCreateAPIView):
# same as above but for subjects
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class SubjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class AppointmentListView(generics.ListCreateAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer
