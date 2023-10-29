# Generated by Django 4.2.6 on 2023-10-28 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_notice_video'),
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('doctor_id', models.AutoField(primary_key=True, serialize=False)),
                ('doctor_src', models.TextField()),
                ('doctor_title', models.TextField()),
                ('doctor_explain', models.TextField()),
            ],
            options={
                'db_table': 'doctor',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Drug',
            fields=[
                ('drug_id', models.AutoField(primary_key=True, serialize=False)),
                ('drug_src', models.TextField()),
                ('drug_title', models.TextField()),
                ('drug_explain', models.TextField()),
            ],
            options={
                'db_table': 'drug',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Eqeuipment',
            fields=[
                ('eqeuipment_id', models.AutoField(primary_key=True, serialize=False)),
                ('eqeuipment_src', models.TextField()),
                ('eqeuipment_title', models.TextField()),
                ('eqeuipment_explain', models.TextField()),
            ],
            options={
                'db_table': 'eqeuipment',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Patient',
            fields=[
                ('patient_id', models.AutoField(primary_key=True, serialize=False)),
                ('patient_src', models.TextField()),
                ('patient_title', models.TextField()),
                ('patient_explain', models.TextField()),
            ],
            options={
                'db_table': 'patient',
                'managed': False,
            },
        ),
    ]