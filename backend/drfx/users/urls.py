# users/urls.py
from django.urls import include, path, re_path
from rest_auth.views import (PasswordResetConfirmView,PasswordResetView)
from rest_framework import routers
from . import views
from django.contrib import admin


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('rest_auth.urls')),
    path('',include('django.contrib.auth.urls')),
    path('users/', views.UserListView.as_view()),
    re_path('user/(?P<pk>\d+)/', views.UpdateUserID.as_view(),name = 'User by ID #'),
    path('subject/', views.SubjectListView.as_view()),
    path('appointment/', views.AppointmentListView.as_view()),
]
