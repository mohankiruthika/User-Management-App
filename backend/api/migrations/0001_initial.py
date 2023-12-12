# Generated by Django 5.0 on 2023-12-11 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=100, unique=True)),
                ('email', models.EmailField(max_length=254)),
                ('role', models.CharField(max_length=50)),
                ('phone', models.CharField(max_length=15)),
            ],
        ),
    ]
