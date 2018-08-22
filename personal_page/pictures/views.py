from django.shortcuts import render
from rest_framework import viewsets
from .models import Picture
from .serializers import PictureSerializer
from rest_framework import renderers

class PictureViewSet(viewsets.ModelViewSet):
	queryset = Picture.objects.all()
	serializer_class = PictureSerializer

	def getPicture(self, request):
		picture = self.get_object()
		return picture