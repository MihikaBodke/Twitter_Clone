# Generated by Django 3.1 on 2021-02-02 07:02

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('twitter', '0009_auto_20210201_1613'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='postID',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='posts',
            name='postTimestamp',
            field=models.DateTimeField(default=datetime.datetime(2021, 2, 2, 12, 32, 47, 335656), null=True),
        ),
    ]
