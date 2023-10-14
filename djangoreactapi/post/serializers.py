from rest_framework import serializers
from .models import Post
from .models import Member
from .models import Board
from .models import Search

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    fields = (
      'id',
      'title',
      'content',
    )
    model = Post

class MemberSerializer(serializers.ModelSerializer):
  id = serializers.CharField(required=False)
  name = serializers.CharField(required=False)
  password = serializers.CharField(required=False)
  nickname = serializers.CharField(required=False)
  email = serializers.CharField(required=False)
  telephone = serializers.CharField(required=False)
  class Meta:
    model = Member
    fields = '__all__'

class BoardSerializer(serializers.ModelSerializer):
  board_id = serializers.IntegerField(required=False)
  board_title = serializers.CharField(required=False)
  board_content = serializers.CharField(required=False)
  user = serializers.CharField(required=False)
  views = serializers.IntegerField(required=False)
  write_day = serializers.DateField(required=False)

  class Meta:
    model = Board
    fields = '__all__'

class SearchSerializer(serializers.ModelSerializer):
  search_id = serializers.IntegerField(required=False)
  search_day = serializers.DateField(required=False)
  search_cnt = serializers.IntegerField(required=False)
  user = serializers.CharField(required=False)

  class Meta:
    model = Search
    fields = '__all__'