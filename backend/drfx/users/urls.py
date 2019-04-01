# users/urls.py
from django.urls import include, path

from . import views

urlpatterns = [
    path('api/users/', views.UserListView.as_view()),
]
