# users/views.py
from rest_framework import generics
from rest_framework.response import Response
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from . import models
from . import serializers
from users.models import CustomUser
from users.models import Appointment
from users.models import Subject

@csrf_exempt
def Appointment_list(request):
    if request.method == 'GET':
        appointment = Appointment.objects.all()
        serializer = serializers.AppointmentSerializer(appointment, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = serializers.AppointmentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class SubjectListView(generics.ListCreateAPIView):
    queryset = models.Subject.objects.all()
    serializer_class = serializers.SubjectSerializer

class AppointmentListView(generics.ListCreateAPIView):
    queryset = models.Appointment.objects.all()
    serializer_class = serializers.AppointmentSerializer

class UpdateUserID(generics.RetrieveUpdateAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        return CustomUser.objects.filter(id = self.kwargs['pk'])
