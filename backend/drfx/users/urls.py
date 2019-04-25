# users/urls.py
from django.urls import include, path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers
from . import views
from .views import current_user
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static

# url links sends you to page. -- pk is just regex (specific instance of an object)
urlpatterns =  [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/', include('django.contrib.auth.urls')),
    path('rest-auth/registration', include('rest_auth.registration.urls')),
    path('current_user/', current_user),
    path('users/', views.UserListView.as_view(),name = 'user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(),name = 'user-detail'),
    path('subjects/', views.SubjectListView.as_view()),
    path('subjects/<int:pk>/', views.SubjectDetail.as_view()),
    path('appointments/', views.AppointmentListView.as_view()),
    path('appointments/<int:pk>/', views.AppointmentDetail.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
