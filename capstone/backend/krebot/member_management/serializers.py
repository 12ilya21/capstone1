from rest_framework import serializers
from .models import Member
from django.contrib.auth.hashers import make_password

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['email', 'password', 'language']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
