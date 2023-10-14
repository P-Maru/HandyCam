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
    user = models.ForeignKey('Member', models.DO_NOTHING, blank=True, null=True)
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