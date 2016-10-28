from django.shortcuts import render
from rest_framework import viewsets
from .models import Resume
from .serializers import ResumeSerializer
from rest_framework import renderers

class ResumeViewSet(viewsets.ModelViewSet):
	queryset = Resume.objects.all()
	serializer_class = ResumeSerializer

	def getResume(self, request):
		resume = self.get_object()
		return resume