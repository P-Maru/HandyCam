"""
URL configuration for djangoreactapi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from post.api import MemberList,MemberDetail,BoardDetail,BoardList,SearchDetail,SearchList



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('post.urls')),
    path('api/member_list',MemberList.as_view(),name='member_list'),
    path('api/member_list/<str:member_id>',MemberDetail.as_view(),name='member_list'),
    path('api/board_list',BoardList.as_view(),name='board_list'),
    path('api/board_list/<int:board_id>',BoardDetail.as_view(),name='board_list'),
    path('api/search_list',SearchList.as_view(),name='search_list'),
    path('api/search_list/<int:serach_id>',SearchDetail.as_view(),name='search_list'),
]
