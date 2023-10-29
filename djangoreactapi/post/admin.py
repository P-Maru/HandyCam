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

from .models import Notice
admin.site.register(Notice)

from .models import Video
admin.site.register(Video)

from .models import Doctor
admin.site.register(Doctor)

from .models import Patient
admin.site.register(Patient)

from .models import Drug
admin.site.register(Drug)

from .models import Eqeuipment
admin.site.register(Eqeuipment)