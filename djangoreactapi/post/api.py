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