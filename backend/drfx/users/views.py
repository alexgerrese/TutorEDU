# users/views.py
from rest_framework import generics
from . import models
from . import serializers
from users.models import CustomUser

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UserID(generics.ListCreateAPIView):
    serializer_class = serializers.UserSerializer

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.filter(id = self.kwargs['pk'])
