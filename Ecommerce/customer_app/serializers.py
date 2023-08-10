from rest_framework import serializers
from customer_app.models import *
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username']




class CustomerProfileSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Customer_Profile
        fields = ['id' , 'phone_number' , 'flag' , 'user']

    def get_user(self , obj):
        return UserSerializer(obj.user , many=False).data


