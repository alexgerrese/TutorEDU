from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Lead


class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = Lead
        fields = ('email',)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = Lead
        fields = ('email',)
