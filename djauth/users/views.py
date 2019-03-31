# users/views.py
# from django.urls import reverse_lazy
# from django.views import
# from .forms import CustomUserCreationForm
from users.models import CustomUser
from users.serializers import UserSerializer
from rest_framework import generics

class SignUp(generics.ListCreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    # form_class = CustomUserCreationForm
    # success_url = reverse_lazy('login')
    # template_name = 'signup.html'
