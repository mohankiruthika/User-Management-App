from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response

class UserViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
        
    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)

    def retrieve(self, request, pk=None):
        user = self.queryset.get(pk=pk)
        serializer = self.serializer_class(user)
        return Response(serializer.data)
        
    def update(self, request, pk=None):
        user = self.queryset.get(pk=pk)
        serializer = self.serializer_class(user,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)


    def destroy(self, request, pk=None):
        user = self.queryset.get(pk=pk)
        user.delete()
        return Response(status=200)