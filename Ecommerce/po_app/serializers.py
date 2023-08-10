from rest_framework import serializers
from po_app.models import *
from django.contrib.auth.models import User
from seller_app.serializers import *


class ProductVariation(serializers.ModelSerializer):
    class Meta:
        model = Product_Variation
        fields= '__all__'





class ProductSerializer(serializers.ModelSerializer):

    variation = serializers.SerializerMethodField(read_only=True)


    class Meta:
        model =  Product
        fields = ['id','title','slug','sku','totalqty','product_image_id','variation']
    def get_variation(self, obj):
        return ProductVariation(obj.product_variation_set.all() , many=True).data