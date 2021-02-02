from django.contrib import admin
from twitter.models import User, Posts, PostComments, Follow
# Register your models here.

admin.site.register(User)


admin.site.register(Posts)

admin.site.register(PostComments)
admin.site.register(Follow)

