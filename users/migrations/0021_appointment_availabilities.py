# Generated by Django 2.1.7 on 2019-04-28 20:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_appointment_is_active'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='availabilities',
            field=models.CharField(blank=True, default='blank', max_length=2000),
        ),
    ]