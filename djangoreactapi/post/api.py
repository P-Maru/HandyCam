from rest_framework.views import APIView
from rest_framework.response import  Response
from .serializers import *
from rest_framework import status

#Member restapi 삽입 수정 삭제
class MemberList(APIView):
  def get(self,request):
    model = Member.objects.all()
    serializer = MemberSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = MemberSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class MemberDetail(APIView):
  def get(self,request,member_id):
    model = Member.objects.get(id=member_id)
    serializer = MemberSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,member_id):
    model = Member.objects.get(id = member_id)
    serializer = MemberSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,member_id):
    model = Member.objects.get(id = member_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#Board restapi 삽입 수정 삭제
class BoardList(APIView):
  def get(self,request):
    model = Board.objects.all()
    serializer = BoardSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = BoardSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class BoardDetail(APIView):
  def get(self,request,board_id):
    model = Board.objects.get(board_id=board_id)
    serializer = BoardSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,board_id):
    model = Board.objects.get(board_id = board_id)
    serializer = BoardSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,board_id):
    model = Board.objects.get(board_id = board_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
#Search restapi 삽입 수정 삭제
class SearchList(APIView):
  def get(self,request):
    model = Search.objects.all()
    serializer = SearchSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = SearchSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class SearchDetail(APIView):
  def get(self,request,search_id):
    model = Search.objects.get(search_id=search_id)
    serializer = SearchSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,search_id):
    model = Search.objects.get(search_id = search_id)
    serializer = SearchSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,search_id):
    model = Search.objects.get(search_id = search_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#notice restapi 삽입 수정 삭제
class NoticeList(APIView):
  def get(self,request):
    model = Notice.objects.all()
    serializer = NoticeSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = NoticeSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class NoticeDetail(APIView):
  def get(self,request,notice_id):
    model = Notice.objects.get(notice_id=notice_id)
    serializer = NoticeSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,notice_id):
    model = Notice.objects.get(notice_id = notice_id)
    serializer = NoticeSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,notice_id):
    model = Notice.objects.get(notice_id = notice_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#video restapi 삽입 수정 삭제
class VideoList(APIView):
  def get(self,request):
    model = Video.objects.all()
    serializer = VideoSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = VideoSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class VideoDetail(APIView):
  def get(self,request,video_id):
    model = Video.objects.get(video_id=video_id)
    serializer = VideoSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,video_id):
    model = Video.objects.get(video_id = video_id)
    serializer = VideoSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,video_id):
    model = Video.objects.get(video_id = video_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)   

#doctor restapi 삽입 수정 삭제
class DoctorList(APIView):
  def get(self,request):
    model = Doctor.objects.all()
    serializer = DoctorSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = DoctorSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class DoctorDetail(APIView):
  def get(self,request,doctor_id):
    model = Doctor.objects.get(doctor_id=doctor_id)
    serializer = DoctorSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,doctor_id):
    model = Doctor.objects.get(doctor_id = doctor_id)
    serializer = DoctorSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,doctor_id):
    model = Doctor.objects.get(doctor_id = doctor_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#Patientrestapi 삽입 수정 삭제
class PatientList(APIView):
  def get(self,request):
    model = Patient.objects.all()
    serializer = PatientSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = PatientSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class PatientDetail(APIView):
  def get(self,request,patient_id):
    model = Patient.objects.get(patient_id=patient_id)
    serializer = PatientSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,patient_id):
    model = Patient.objects.get(patient_id = patient_id)
    serializer = PatientSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,patient_id):
    model = Patient.objects.get(patient_id = patient_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

#drugrestapi 삽입 수정 삭제
class DrugList(APIView):
  def get(self,request):
    model = Drug.objects.all()
    serializer = DrugSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = DrugSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class DrugDetail(APIView):
  def get(self,request,drug_id):
    model = Drug.objects.get(drug_id=drug_id)
    serializer = DrugSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,drug_id):
    model = Drug.objects.get(drug_id = drug_id)
    serializer = DrugSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,drug_id):
    model = Drug.objects.get(drug_id = drug_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  
#equipmentrestapi 삽입 수정 삭제
class EqeuipmentList(APIView):
  def get(self,request):
    model = Eqeuipment.objects.all()
    serializer = EqeuipmentSerializer(model,many=True)
    return Response(serializer.data)

  def post(self,request):
    serializer = EqeuipmentSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class EqeuipmentDetail(APIView):
  def get(self,request,eqeuipment_id):
    model = Eqeuipment.objects.get(eqeuipment_id=eqeuipment_id)
    serializer = EqeuipmentSerializer(model)
    return Response(serializer.data)
  
  def put(self,request,eqeuipment_id):
    model = Eqeuipment.objects.get(eqeuipment_id = eqeuipment_id)
    serializer = EqeuipmentSerializer(model,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

  def delete(self,request,eqeuipment_id):
    model = Eqeuipment.objects.get(eqeuipment_id = eqeuipment_id)
    model.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)