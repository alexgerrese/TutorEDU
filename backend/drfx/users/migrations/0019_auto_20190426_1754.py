# Generated by Django 2.2 on 2019-04-26 17:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0018_customuser_subjects'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='student',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='student_appointments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='subject',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subject_appointments', to='users.Subject'),
        ),
        migrations.AlterField(
            model_name='appointment',
            name='tutor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tutor_appointments', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='subjects',
            field=models.ManyToManyField(blank=True, related_name='user_subjects', to='users.Subject'),
        ),
    ]
