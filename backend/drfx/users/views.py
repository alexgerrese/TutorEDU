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

class SubjectListView(APIView):
# same as above but for subjects
    def get(self, request, format=None):
        subjects = models.Subject.objects.all()
        serializer = serializers.SubjectSerializer(subjects,many=True)
        return Response(serializer.data)
# same as above but for subjects
    def post(self, request, format=None):
        serializer = serializers.SubjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SubjectDetail(APIView):
# same thing as above but for a single subject
    def get_object(self, pk):
        try:
            return models.Subject.objects.get(pk=pk)
        except models.Subject.DoesNotExist:
            raise Http404
# same thing as above but for a single subject
    def get(self, request, pk, format=None):
        subject = self.get_object(pk)
        serializer = serializers.SubjectSerializer(subject)
        return Response(serializer.data)
# same thing as above but for a single subject
    def put(self, request, pk, format=None):
        subject = self.get_object(pk)
        serializer = serializers.SubjectSerializer(subject)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# same above but for appointments
class AppointmentListView(APIView):
    def get(self, request, format=None):
        appointments = models.Appointment.objects.all()
        serializer = serializers.AppointmentSerializer(appointments,many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = serializers.AppointmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# same as above but for single appointments
class AppointmentDetail(APIView):
    def get_object(self, pk):
        try:
            return models.Appointment.objects.get(pk=pk)
        except models.Appointment.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        appointment = self.get_object(pk)
        serializer = serializers.AppointmentSerializer(appointment)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        appointment = self.get_object(pk)
        serializer = serializers.AppointmentSerializer(appointment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        appointment = self.get_object(pk)
        appointment.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
