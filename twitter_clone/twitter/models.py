from django.db import models
import datetime

# Create your models here.
class User(models.Model):
    username = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=20)
    displayName = models.CharField(max_length=50, unique = False)
    verified = models.BooleanField(default=False)
    avatar = models.ImageField(upload_to='imgs')
    followers = models.IntegerField(default=0)
    following = models.IntegerField(default=0)

def getDatetime():

    return   datetime.datetime.now()
class Posts(models.Model):
    postID = models.AutoField(primary_key=True,unique=True)
    username = models.ForeignKey('twitter.User', on_delete=models.CASCADE)
    postImage = models.FileField(blank=True)
    postLikes = models.IntegerField()
    # commentText = models.ForeignKey('twitter.PostComments', on_delete=models.CASCADE)
    postTimestamp = models.DateTimeField(default=getDatetime(), null=True)
    postText = models.CharField(max_length = 500)
    displayName = models.CharField(max_length=100,blank=True)
    verified = models.BooleanField(blank=True)
    avatar = models.ImageField(upload_to="imgs",null=True,blank=True)
    def getPosts(username):
        
        from .models import Posts, Follow
        username=[username]
        print(username)
        usernameOfFollowing = Follow.objects.all().filter(follower=username[0])
        for i in usernameOfFollowing:
            username.append(i.following)
        posts = Posts.objects.all().filter(username__in=username).prefetch_related('username').order_by('-postTimestamp')
        # posts = Posts.objects.annotate(displayName= displayName)
        for i in range(len(posts)):
            # print(posts[i].annotate(displayName=posts[i].username.displayName))
            posts[i].displayName=posts[i].username.displayName
            posts[i].avatar=posts[i].username.avatar
            posts[i].verified=posts[i].username.verified
            posts[i].postTimestamp=posts[i].postTimestamp.strftime("%d/%m/%Y %H:%M:%S")   

            print(posts[i].verified)

        # print(username)
        # for i in posts:
            # print(i.postID)
        return posts


class PostComments(models.Model):
    commentText = models.CharField(max_length=200)
    postID = models.ForeignKey(Posts, on_delete=models.CASCADE)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    commentLikes = models.IntegerField()

class Follow(models.Model):
    follower = models.ForeignKey(User, related_name="follwer", on_delete=models.CASCADE)
    following = models.ForeignKey(User, on_delete=models.CASCADE)
    