from django.contrib import admin

# Register your models here.

from .models import Post
admin.site.register(Post)

from .models import Member
admin.site.register(Member)

from .models import Board
admin.site.register(Board)

from .models import Search
admin.site.register(Search)