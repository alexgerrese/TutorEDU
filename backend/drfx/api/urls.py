# api/urls.py
from django.urls import include, path
from . import views
from rest_auth.views import (PasswordResetConfirmView,PasswordResetView)
from rest_framework import routers

urlpatterns = [
    path('users/', include('users.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path(r'^',include('django.contrib.auth.urls')),
]
