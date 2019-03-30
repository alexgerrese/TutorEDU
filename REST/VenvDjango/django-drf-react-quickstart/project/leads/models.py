from django.db import models
from .validators import validate_school_email

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True, validators= [validate_school_email])

    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    YEAR_IN_SCHOOL_CHOICES = (
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    )
    year_in_school = models.CharField(
        max_length=2,
        choices=YEAR_IN_SCHOOL_CHOICES,
        default=FRESHMAN,
    )
    TUTOR = 'TU'
    STUDENT = 'ST'

    ROLES_CHOICES = (
        (TUTOR, 'Tutor'),(STUDENT,"Student")
    )
    Role = models.CharField(
        max_length=2,
        choices=ROLES_CHOICES,
        default=STUDENT,
    )
    created_at = models.DateTimeField(auto_now_add=True)
