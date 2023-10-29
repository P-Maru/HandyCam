from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()

    def __str__(self):
        return self.title

class Board(models.Model):
    board_id = models.AutoField(primary_key=True)
    board_title = models.CharField(max_length=255)
    board_content = models.TextField()
    nickname = models.CharField(max_length=45, blank=True, null=True)
    views = models.IntegerField(blank=True, null=True)
    write_day = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'board'


class Member(models.Model):
    name = models.CharField(max_length=45)
    id = models.CharField(db_column='ID', primary_key=True, max_length=45)  # Field name made lowercase.
    password = models.CharField(db_column='Password', max_length=45)  # Field name made lowercase.
    nickname = models.CharField(db_column='Nickname', max_length=45, blank=True, null=True)  # Field name made lowercase.
    email = models.CharField(db_column='Email', max_length=45, blank=True, null=True)  # Field name made lowercase.
    telephone = models.CharField(db_column='Telephone', max_length=45, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'member'


class Search(models.Model):
    search_id = models.AutoField(primary_key=True)
    search_day = models.DateField()
    search_cnt = models.IntegerField()
    user = models.ForeignKey(Member, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'search'

class Video(models.Model):
    video_id = models.AutoField(primary_key=True)
    video_src = models.TextField()
    video_title = models.TextField()
    video_explain = models.TextField()
    video_type = models.CharField(max_length=255)
    count = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'video'

class Notice(models.Model):
    notice_id = models.AutoField(db_column='Notice_id', primary_key=True)  # Field name made lowercase.
    notice_title = models.TextField(db_column='Notice_title')  # Field name made lowercase.
    writer = models.CharField(max_length=255)
    write_day = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'notice'

class Doctor(models.Model):
    doctor_id = models.AutoField(primary_key=True)
    doctor_src = models.TextField()
    doctor_title = models.TextField()
    doctor_explain = models.TextField()

    class Meta:
        managed = False
        db_table = 'doctor'


class Drug(models.Model):
    drug_id = models.AutoField(primary_key=True)
    drug_src = models.TextField()
    drug_title = models.TextField()
    drug_explain = models.TextField()

    class Meta:
        managed = False
        db_table = 'drug'


class Eqeuipment(models.Model):
    eqeuipment_id = models.AutoField(primary_key=True)
    eqeuipment_src = models.TextField()
    eqeuipment_title = models.TextField()
    eqeuipment_explain = models.TextField()

    class Meta:
        managed = False
        db_table = 'eqeuipment'

class Patient(models.Model):
    patient_id = models.AutoField(primary_key=True)
    patient_src = models.TextField()
    patient_title = models.TextField()
    patient_explain = models.TextField()

    class Meta:
        managed = False
        db_table = 'patient'
