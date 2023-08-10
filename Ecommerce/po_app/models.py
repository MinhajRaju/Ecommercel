from django.db import models
from django.contrib.auth.models import User
from seller_app.models import *
from django.contrib.postgres.fields import ArrayField

from po_app.helper import *


from django.db.models.signals import pre_save , post_delete


class Product(models.Model):
    seller = models.ForeignKey(Seller_Profile , on_delete=models.CASCADE , null=True , blank=True)
    title = models.CharField(max_length=200 , null=True , blank=True)
    slug = models.SlugField(max_length=250 , null=True , blank=True)
    sku = models.CharField(max_length=150 , null=True , blank=True)
    totalqty=models.CharField(max_length=150 , null=True, blank=True)
    product_image_id  = ArrayField(models.CharField(max_length=200) , null=True , blank=True)

    def __str__(self):
        return self.title


pre_save.connect(slug_generator, sender=Product)
pre_save.connect(sku_generator, sender=Product)







class Product_Variation(models.Model):
    product = models.ForeignKey(Product , on_delete=models.CASCADE  , null=True , blank=True)
    sku  = models.CharField(max_length=150 , null=True,  blank=True)
    color  = models.CharField(max_length=150 , null=True,  blank=True)
    qty  = models.CharField(max_length=150 , null=True,  blank=True)
    size  = models.CharField(max_length=150 , null=True,  blank=True)
    product_image_id  = ArrayField(models.CharField(max_length=200) , null=True , blank=True)

    def __str__(self):
        return str(self.id)





class Product_Image(models.Model):

    seller = models.ForeignKey(Seller_Profile , on_delete=models.CASCADE , null=True , blank=True)
    photo = models.ImageField(upload_to=RandomFileName('product_image/'))

    def save(self, *args, **kwargs):
            new_image = compress(self.photo)
            self.photo = new_image
            super().save(*args, **kwargs)


    def __str__(self):
        return str(self.id)



post_delete.connect(delete_save_image ,sender=Product_Image)
pre_save.connect(update_save_image, sender=Product_Image)
