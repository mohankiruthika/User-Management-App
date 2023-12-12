from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username', 'email', 'role', 'phone')
        # read_only_fields = ('username', 'email', 'role', 'phone')