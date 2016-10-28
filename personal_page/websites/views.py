from django.shortcuts import render
from rest_framework import viewsets
from .models import Website
from .serializers import WebsiteSerializer
from rest_framework import renderers
from rest_framework.decorators import detail_route

class WebsiteViewSet(viewsets.ModelViewSet):
	queryset = Website.objects.all()
	serializer_class = WebsiteSerializer

	def getWebsite(self, request):
		website = self.get_object()
		return website