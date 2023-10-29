from rest_framework import serializers
from .models import Post
from .models import Member
from .models import Board
from .models import Search
from .models import Video
from .models import Notice
from .models import Doctor
from .models import Drug
from. models import Eqeuipment
from. models import Patient

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
  nickname = serializers.CharField(required=False)
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

class VideoSerializer(serializers.ModelSerializer):
  video_id = serializers.IntegerField(required=False)
  video_src = serializers.CharField(required=False)
  video_title = serializers.CharField(required=False)
  video_explain = serializers.CharField(required=False)

  class Meta:
    model = Video
    fields = '__all__'    

class NoticeSerializer(serializers.ModelSerializer):
  notice_id = serializers.IntegerField(required=False)
  notice_title = serializers.CharField(required=False)
  writer = serializers.CharField(required=False)
  write_day = serializers.DateField(required=False)

  class Meta:
    model = Notice
    fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
  video_id = serializers.IntegerField(required=False)
  video_src = serializers.CharField(required=False)
  video_title = serializers.CharField(required=False)
  video_explain = serializers.CharField(required=False)
  video_type = serializers.CharField(required=False)
  count = serializers.IntegerField(required=False)
  class Meta:
    model = Video
    fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
  doctor_id = serializers.IntegerField(required=False)
  doctor_src = serializers.CharField(required=False)
  doctor_title = serializers.CharField(required=False)
  doctor_explain = serializers.CharField(required=False)

  class Meta:
    model = Doctor
    fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
  doctor_id = serializers.IntegerField(required=False)
  doctor_src = serializers.CharField(required=False)
  doctor_title = serializers.CharField(required=False)
  doctor_explain = serializers.CharField(required=False)

  class Meta:
    model = Patient
    fields = '__all__'

class DrugSerializer(serializers.ModelSerializer):
  drug_id = serializers.IntegerField(required=False)
  drug_src = serializers.CharField(required=False)
  drug_title = serializers.CharField(required=False)
  drug_explain = serializers.CharField(required=False)

  class Meta:
    model = Drug
    fields = '__all__'

class EqeuipmentSerializer(serializers.ModelSerializer):
  eqeuipment = serializers.IntegerField(required=False)
  eqeuipment = serializers.CharField(required=False)
  eqeuipment_title = serializers.CharField(required=False)
  eqeuipment_explain = serializers.CharField(required=False)

  class Meta:
    model = Eqeuipment
    fields = '__all__'    