# Generated by Django 4.2.6 on 2023-10-27 08:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_board_member_search'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notice',
            fields=[
                ('notice_id', models.AutoField(db_column='Notice_id', primary_key=True, serialize=False)),
                ('notice_title', models.TextField(db_column='Notice_title')),
                ('writer', models.CharField(max_length=255)),
                ('write_day', models.DateField(blank=True, null=True)),
            ],
            options={
                'db_table': 'notice',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Video',
            fields=[
                ('video_id', models.AutoField(primary_key=True, serialize=False)),
                ('video_src', models.TextField()),
                ('video_title', models.TextField()),
                ('video_explain', models.TextField()),
            ],
            options={
                'db_table': 'video',
                'managed': False,
            },
        ),
    ]
