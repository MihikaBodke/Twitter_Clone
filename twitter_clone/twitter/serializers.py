from rest_framework import serializers
from twitter.models import Posts, User, PostComments, Follow

class PostSerializer(serializers.ModelSerializer):
    class Meta:
    
        model = Posts
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'



class PostCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostComments
        fields = '__all__'


class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = '__all__'
