from django.shortcuts import render
from rest_framework import generics

from .models import Post
from .serializers import PostSerializer
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
import subprocess


import cv2
import imutils as imutils
import mediapipe as mp
import numpy as np
from tensorflow import keras
from keras import models, layers  # 이 부분 추가
from PIL import ImageFont, ImageDraw, Image
import time
import os
# Create your views here.
actions = ['머리가','다리가','눈이','아픕니다.','기침이 납니다.','어지럼증이 있습니다.','열이 납니다.','허리가','부어오릅니다.']
seq_length = 30

#model = keras.models.load_model('/models/model.h5')
    
model_path = os.path.join(os.path.dirname(__file__), "models", "model4.h5")

# 모델 불러오기
model = keras.models.load_model(model_path)
print(model)

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
hands = mp_hands.Hands(
    max_num_hands=2,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5)
    
startTime = time.time()


        
        
seq = []
action_seq = []

prev_action = ''
# prev_action = request.POST.get("message", "")

prev_index = 0
recognizeDelay = 2


class ListPost(generics.ListCreateAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
  queryset = Post.objects.all()
  serializer_class = PostSerializer

@csrf_exempt
def practice(request):
    if request.method == 'POST':
        frame_image = request.FILES.get('frame')
        frame_data = frame_image.read()
        numpy_array = np.frombuffer(frame_data, dtype=np.uint8)
        img = cv2.imdecode(numpy_array, cv2.IMREAD_COLOR)
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.flip(img_rgb, 1)
        result = hands.process(img)

        # 랜드마크를 이미지에 그립니다.
        if result.multi_hand_landmarks is not None:
            for res in result.multi_hand_landmarks:
                mp_drawing.draw_landmarks(img, res, mp_hands.HAND_CONNECTIONS)

        # 랜드마크가 그려진 이미지를 저장할 경로나 처리를 원하는 방식에 맞게 적용하면 됩니다.
        # 이 예시에서는 랜드마크가 그려진 이미지를 "landmarked_image.jpg" 파일로 저장합니다.
        cv2.imwrite("landmarked_image.jpg", cv2.cvtColor(img, cv2.COLOR_RGB2BGR))

    return JsonResponse({"message": False})


        
@csrf_exempt
def start_camera_and_translate(request):
    # Your view logic here
    global sentence, prev_action, startTime,seq,action_seq,prev_action,prev_index,recognizeDelay
    
    if request.method == 'POST':
        # 이미지 데이터를 받기 위해 request.FILES를 사용합니다.
        frame_image = request.FILES.get('frame')
        frame_data = frame_image.read()
        numpy_array = np.frombuffer(frame_data, dtype=np.uint8)
        img = cv2.imdecode(numpy_array, cv2.IMREAD_COLOR)
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = cv2.flip(img_rgb, 1)
        result = hands.process(img)

    sentence = ''
    send_massage = ''
    if result.multi_hand_landmarks is not None:
      for res in result.multi_hand_landmarks:
          joint = np.zeros((21, 4))

          for j, lm in enumerate(res.landmark):
            print(lm)
            joint[j] = [lm.x, lm.y, lm.z, lm.visibility]
                # Compute angles between joints
          v1 = joint[[0, 1, 2, 3, 0, 5, 6, 7, 0, 9, 10, 11, 0, 13, 14, 15, 0, 17, 18, 19], :3]  # Parent joint
          v2 = joint[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], :3]  # Child joint
          v = v2 - v1  # [20, 3]
                # Normalize v
          v = v / np.linalg.norm(v, axis=1)[:, np.newaxis]

                # Get angle using arcos of dot product
          angle = np.arccos(np.einsum('nt,nt->n',
                                    v[[0, 1, 2, 4, 5, 6, 8, 9, 10, 12, 13, 14, 16, 17, 18], :],
                                    v[[1, 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 17, 18, 19], :]))  # [15,]

          angle = np.degrees(angle)  # Convert radian to degree
            
          d = np.concatenate([joint.flatten(), angle])

          seq.append(d)

          mp_drawing.draw_landmarks(img, res, mp_hands.HAND_CONNECTIONS,)

          if len(seq) < seq_length:
              continue
            
          input_data = np.expand_dims(np.array(seq[-seq_length:], dtype=np.float32), axis=0)
            
          y_pred = model.predict(input_data).squeeze()
 
            
          i_pred = int(np.argmax(y_pred))
          conf = y_pred[i_pred]


          if conf < 0.9:
              continue

          action = actions[i_pred]
          action_seq.append(action)

          if len(action_seq) < 3:
              continue

          this_action = '?'
          if action_seq[-1] == action_seq[-2] == action_seq[-3]:
              this_action = action
              print(this_action)

              if time.time() - startTime > recognizeDelay and prev_action != this_action:
                  sentence += this_action
                  prev_action = this_action
                  startTime = time.time()
                  action_seq[-1] = ''
                  action_seq[-2] = ''
                  action_seq[-3] = ''
                  print("ㅇㅇ")
            
                    
          else:
              startTime = time.time()
               
    send_massage = sentence
    
    
    
    
    return JsonResponse({"message": send_massage})
    
    
    
    
    