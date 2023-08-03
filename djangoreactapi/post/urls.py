from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    path('translate/', views.start_camera_and_translate, name='translate'),  # /translate/로 변경
]
