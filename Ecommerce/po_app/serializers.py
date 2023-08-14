from rest_framework import serializers
from po_app.models import *
from django.contrib.auth.models import User
from seller_app.serializers import *





class ProductImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product_Image
        fields = ['id','photo']


class ProductVariation(serializers.ModelSerializer):

    variation_image =  serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = Product_Variation
        fields= ['id','sku','color','qty','size','variation_image']

    def get_variation_image(self, obj):
        return ProductImageSerializer(obj.product_image_set.all(), many=True).data




class ProductSerializer(serializers.ModelSerializer):

    variation = serializers.SerializerMethodField(read_only=True)

    image =  serializers.SerializerMethodField(read_only=True)


    class Meta:
        model =  Product
        fields = ['id','seller','title','slug','sku','totalqty','variation' ,'image']
    def get_variation(self, obj):
        return ProductVariation(obj.product_variation_set.all() , many=True).data
    def get_image(self, obj):
        return ProductImageSerializer(obj.product_image_set.all(), many=True).data






class OrderDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Order_Details
        fields = '__all__'


class OrderSerailizer(serializers.ModelSerializer):

    order   = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields = ['order_no' , 'order']

    def get_order(self , obj):
        return OrderDetailSerializer(obj.order_details_set.all(), many=True).data


