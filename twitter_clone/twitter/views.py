from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PostSerializer, UserSerializer, PostCommentSerializer, FollowSerializer

from .models import Posts, User, PostComments, Follow
# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        # 'List': '/subject-list/',
        # 'Detail View': '/subject-detail/<str:pk>/',
        # 'Create': '/subject-create/',
        # 'Update': '/subject-update/<str:pk>/',
        # 'Delete': '/subject-delete/<str:pk>/',
    }

    return Response(api_urls)




@ api_view(['POST'])
def userLogin(request, username, password):
    try:
        print('username=', username, 'password=', password)
        user = User.objects.get(username=username)
    except ObjectDoesNotExist:
        return Response(False)
    except:
        print("EXCEPTION")

    if(user.password == password):
        print("Password right")
        serializer = UserSerializer(user)
        if(serializer.is_valid):
            return Response(serializer.data)
        else:
            print("SERIALIZER NOT VALID")
    else:
        print("Password wrong")
        return Response(False)
    return Response(True)


# TODO regisytation react router


@ api_view(['POST'])
def userRegistration(request):
    import json
    # data = json.loads(request.body.decode('utf-8'))
    # access_token = body.get("access_token")

    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print("SERIALIZER VALID:",serializer.is_valid())
        print("SERIA",serializer.errors)

    return Response(serializer.data)

@api_view(['GET'])
def postList(request, username):
    # username = User.objects.get(username=username)
    # print(username)
    # usernameOfFollowing = Follow.objects.get(follower=username)
    # print(type(username))
    # print(username.append(usernameOfFollowing))

#  or username = usernameOfFollowing
    # posts = Posts.objects.all().filter(username=username)
    posts = Posts.getPosts(username)
    print("username3:",username,"Posts are:")
    for i in posts:
        print(i.postText)
    serializer = PostSerializer(posts, many=True)
    # print(serializer.data)
    return Response(serializer.data)
import datetime
from django.db.models import Max

@ api_view(['POST'])
def postInsert(request):
    serializer = PostSerializer(data=request.data)
    print("INSERTING..")
    # print(Posts.objects.all().aggregate(Max('postID'))),
    
    newSerializer = {
        id:Posts.objects.all().aggregate(Max('postID'))['postID__max']+1,
        # postTimestamp: datetime.now(), 
    }
    if serializer.is_valid():
        # newSerializer.update(serializer)
        print(newSerializer)
        serializer.save()

    else:
        print("SERIALIZER VALID:",serializer.is_valid())        
        print("SERIA",serializer.errors)
        # posts = Posts.getPosts(username)
        # serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)


@ api_view(['GET'])
def recommendUsers(request, username):
    users = Follow.objects.all().filter(follower=username)
    print(users)
    list1=[]
    for i in users:
        list1.append(i.following.username)
    print("Follow")
    usersToFollow = User.objects.all().exclude(username__in=list1)
    for i in usersToFollow:
        print(i.username)
        n=5
    if(len(usersToFollow)<n):
        n = len(usersToFollow)
    serializer = UserSerializer(usersToFollow[:n], many=True)

    return Response(serializer.data)



from django.views.decorators.csrf import csrf_exempt

@ api_view(['POST'])
def userFollow(request):
    serializer = FollowSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print("SERIALIZER VALID:",serializer.is_valid())
        print("SERIA",serializer.errors)

    return Response(serializer.data)