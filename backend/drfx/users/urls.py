# users/urls.py
from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('', views.UserListView.as_view()),
    re_path('(?P<pk>\d+)/', views.UpdateUserID.as_view(),name = 'User by ID #'),
    path('subject/', views.SubjectListView.as_view()),
    path('appointment/', views.AppointmentListView.as_view()),
]
