from django.urls import path
from po_app import views


urlpatterns = [

    path('' , views.All  , name='All'),
    path('singleproduct/<int:pk>/' , views.SingleProduct  , name='All'),
    path('create/' , views.Create  , name='Create'),
    path('removeimg/' , views.RemoveImage, name='RemoveImage'),
    path('update/' , views.Update  , name='Upadate'),
    path('image/' , views.Image  , name='Upadate'),
    path('flashsale/', views.FlashSale , name='FlashSale'),
    path('dashproduct/<int:num_product>/', views.DashProduct , name='FlashSale'),



    path('test/' , views.OrderItemSave  , name='Upadate'),






]


