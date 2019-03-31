from django.urls import path
from django.contrib import admin

from . import views
urlpatterns = [
    path('api/lead/admin', admin.site.urls),
    path('api/lead/', views.LeadListCreate.as_view() ),
]
