from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from .validators import validate_school_email


from .managers import CustomUserManager

class Lead(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('email address'), unique=True, validators= [validate_school_email])
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
    name = models.CharField(max_length=100)
#    email = models.EmailField(null=True, validators= [validate_school_email])
    
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    YEAR_IN_SCHOOL_CHOICES = ((FRESHMAN, 'Freshman'),(SOPHOMORE, 'Sophomore'),(JUNIOR, 'Junior'),(SENIOR, 'Senior'),)
    year_in_school = models.CharField(max_length=2,choices=YEAR_IN_SCHOOL_CHOICES,default=FRESHMAN,)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email
