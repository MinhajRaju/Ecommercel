from django.urls import path
from admin_app import views


urlpatterns = [

    path('' , views.All  , name='All')


]