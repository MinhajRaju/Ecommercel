# Generated by Django 4.2.4 on 2023-08-09 07:35

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion
import po_app.helper


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('seller_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=200, null=True)),
                ('sku', models.CharField(blank=True, max_length=150, null=True)),
                ('product_image_id', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), blank=True, null=True, size=None)),
                ('seller', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='seller_app.seller_profile')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Variation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sku', models.CharField(blank=True, max_length=150, null=True)),
                ('color', models.CharField(blank=True, max_length=150, null=True)),
                ('qty', models.CharField(blank=True, max_length=150, null=True)),
                ('size', models.CharField(blank=True, max_length=150, null=True)),
                ('product', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='po_app.product')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(upload_to=po_app.helper.RandomFileName('product_image/'))),
                ('seller', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='seller_app.seller_profile')),
            ],
        ),
    ]