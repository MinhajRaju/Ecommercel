from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework.response import Response
from django.contrib.auth.models import User

#Model import
from admin_app.models import *
from customer_app.models import *
from po_app.models import *
from seller_app.models import *

#Serializer Import
from admin_app.serializers import *
from customer_app.serializers import *
from po_app.serializers import *
from seller_app.serializers import *

import random















@api_view(['GET','POST'])
def All(request):
    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)




@api_view(['GET','POST'])
def Create(request):

    data = request.data
    sellerinstance = Seller_Profile.objects.get(id=2)

    productimageinstance = Product_Image.objects.filter(seller=sellerinstance)
    img  = list(productimageinstance)


    variation = [{"id":2,"color":"red","qty":12,"size":"50","product":5,"product_image_id":[2,4,5]},
                 {"id":3,"color":"red","qty":30,"size":"50","product":5,"product_image_id":[1,9,7]}]

    totalqty = []
    for i  , v  in enumerate(variation):
        totalqty.append(v['qty'])
    sumofqty   = sum(totalqty)



    productinstance = Product.objects.create(
        seller  = sellerinstance,
        title = data['title'],
        product_image_id = img,
        totalqty = sumofqty
    )





    ramdomnum = random.randint(1,100000)
    for i , value in enumerate(variation):

        number  =  ramdomnum + i
        skunumber = str(productinstance.id) +"_BD-"+str(number)
        Product_Variation.objects.create(
            product = productinstance,
            color = value['color'],
            qty = value['qty'],
            size = value['size'],
            product_image_id = value['product_image_id'],
            sku = skunumber,
        )


    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)










@api_view(['GET','POST'])
def Update(request):

    data = request.data
    sellerinstance = Seller_Profile.objects.get(id=2)

    productimageinstance = Product_Image.objects.filter(seller=sellerinstance)
    img  = list(productimageinstance)


    variation = [{"id":7,"color":"red","qty":12,"size":"50","product":5,"product_image_id":[2,4,5]},
                 {"id":8,"color":"adfasfd","qty":30,"size":"50","product":5,"product_image_id":[1,9,7]}]

    totalqty = []
    for i  , v  in enumerate(variation):
        totalqty.append(v['qty'])
    sumofqty   = sum(totalqty)

    Product.objects.filter(id=8).update(

        title = data['title'],
        product_image_id = img,
        totalqty = sumofqty
    )


    for i , value in enumerate(variation):
        id  = value['id']

        Product_Variation.objects.filter(id=id).update(
            color = value['color'],
            qty = value['qty'],
            size = value['size'],
            product_image_id = value['product_image_id']

        )


    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)




@api_view(['GET','POST'])
def RemoveImage(request):

    productinstance  = Product.objects.all()
    for i in productinstance:
        if '11' in i.product_image_id:
             k  = i.product_image_id
             k.remove('11')
             Product.objects.filter(id=i.id).update(product_image_id=k)
    Product_Image.objects.get(id=11).delete()

    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)


