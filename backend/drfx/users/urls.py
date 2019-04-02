# users/urls.py
from django.urls import include, path, re_path

from . import views

urlpatterns = [
    path('', views.UserListView.as_view()),
    re_path('(?P<pk>\d+)/$', views.UserID.as_view())
]
