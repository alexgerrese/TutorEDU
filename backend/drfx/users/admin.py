# users/admin.py
from django.contrib import admin
from .models import CustomUser, Subject, Appointment

admin.site.register(CustomUser)
admin.site.register(Subject)
admin.site.register(Appointment)
