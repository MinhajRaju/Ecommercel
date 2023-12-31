# Generated by Django 4.2.4 on 2023-08-12 07:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('po_app', '0007_product_image_variation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product_image',
            name='product',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='po_app.product'),
        ),
        migrations.AlterField(
            model_name='product_image',
            name='variation',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='po_app.product_variation'),
        ),
    ]
