# Generated by Django 4.2.4 on 2023-08-09 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('po_app', '0003_product_variation_product_image_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='totalqty',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
    ]
