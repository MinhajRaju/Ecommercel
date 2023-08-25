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
def SingleProduct(request , pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerializer(product , many=False).data
    return Response(serializer)

@api_view(['GET','POST'])
def Image(request):
    product = Product_Image.objects.all()
    serializer = ProductImageSerializer(product , many=True).data
    return Response(serializer)








@api_view(['GET','POST'])
def Create(request):

    data = request.data
    sellerinstance = Seller_Profile.objects.get(id=2)

    variation = [{"id":2,"color":"red","qty":12,"size":"50","product":5,"product_image_id":[16,17,18]},
                 {"id":3,"color":"red","qty":30,"size":"50","product":5,"product_image_id":[19,20,21]}]

    sumofqty = [v['qty'] for i  , v in enumerate(variation)]


    porductimg = [{"imgid":[16,20,21]}]

    productinstance = Product.objects.create(
        seller  = sellerinstance,
        title = data['title'],
        totalqty = sumofqty
    )


    for i in porductimg[0]['imgid']:
        Product_Image.objects.filter(id=i).update(product=productinstance)







    ramdomnum = random.randint(1,100000)
    for i , value in enumerate(variation):

        number  =  ramdomnum + i
        skunumber = str(productinstance.id) +"_BD-"+str(number)
        productvaritaioninstance = Product_Variation.objects.create(
            product = productinstance,
            color = value['color'],
            qty = value['qty'],
            size = value['size'],
            sku = skunumber,
        )

        for  i in value['product_image_id']:
            Product_Image.objects.filter(id=i).update(variation=productvaritaioninstance)


    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)






@api_view(['GET','POST'])
def FlashSale(request):

    flashsale = Product.objects.filter(flashsale=True)
    serializer   = ProductSerializer(flashsale , many=True).data
    return Response(serializer)







@api_view(['GET','POST'])
def Update(request):

    data = request.data

    variation = [{"id":44,"color":"red","qty":12,"size":"50","product":5,"product_image_id":[19,20,21]},
                 {"id":45,"color":"adfasfd","qty":30,"size":"50","product":5,"product_image_id":[16,17,18]}]



    sumofqty = [v['qty'] for i  , v in enumerate(variation)]

    Product.objects.filter(id=29).update(

        title = data['title'],
        totalqty = sumofqty
    )


    for i , value in enumerate(variation):
        id  = value['id']

        Product_Variation.objects.filter(id=id).update(
            color = value['color'],
            qty = value['qty'],
            size = value['size'],

        )

        for  i in value['product_image_id']:
            Product_Image.objects.filter(id=i).update(variation=id)




    product = Product.objects.all()
    serializer = ProductSerializer(product , many=True).data
    return Response(serializer)




@api_view(['GET','POST'])
def RemoveImage(request):

    idarray = [21,20]

    for i in idarray:
        Product_Image.objects.filter(id=i).delete()

    return Response()

@api_view(['GET','POST'])
def OrderItemSave(request):
    data = request.data

    customerinstance = Customer_Profile.objects.get(id=3)
    shippingAddressinstance = shippingAddress.objects.get(id=1)

    cartProduct = [{"product":32,"title":"masuda 2","qty":2,"mrp":0,"slug":"masuda-2","countInStock":700,"sellerId":2},
    {"product":33,"title":"masuda","qty":2,"mrp":0,"slug":"masuda","countInStock":798,"sellerId":2},
     {"product":32,"title":"masuda","qty":2,"mrp":0,"slug":"masuda","countInStock":798,"sellerId":6},]

    x = [i['sellerId'] for i in cartProduct]
    sellerid  = set(x)



    for i in sellerid:

        sellerinstance  = Seller_Profile.objects.get(id=i)

        orderInstance = Order.objects.create(
            customer = customerinstance,
            shipping = shippingAddressinstance,
            seller  = sellerinstance,
            status = "Hold",
            payment_status = "paid"
        )



        #lambda argument(s) : expression
        x = filter(lambda cart: cart['sellerId'] == i , cartProduct)
        itemlist = list(x)


        for j in itemlist:

            product = Product.objects.get(id=j['product'])

            Order_Details.objects.create(
                product = product,
                order = orderInstance,
                seller = sellerinstance

            )



    return Response()























@api_view(['GET' , 'POST'])
def DetailsOrder(request):

    order = Order.objects.all()
    serializer = OrderSerailizer(order, many=True).data
    return Response(serializer)

@api_view(['GET' , 'POST'])
def DashProduct(request , *args , **kwargs):

    num_of_product = kwargs.get('num_product')
    product = Product.objects.all()[0:num_of_product]
    print(product)
    serializer =  ProductSerializer(product , many=True).data
    return Response(serializer)




