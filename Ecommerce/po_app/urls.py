from django.urls import path
from po_app import views


urlpatterns = [

    path('' , views.All  , name='All'),
    path('create/' , views.Create  , name='Create'),
    path('removeimg/' , views.RemoveImage, name='RemoveImage'),
    path('update/' , views.Update  , name='Upadate'),

    path('image/' , views.Image  , name='Upadate'),


    path('test/' , views.OrderItemSave  , name='Upadate'),






]


