from django.shortcuts import render
from rest_framework import viewsets
from .models import Misc
from .serializers import MiscSerializer
from rest_framework import renderers

class MiscViewSet(viewsets.ModelViewSet):
	queryset = Misc.objects.all()
	serializer_class = MiscSerializer

	def getMisc(self, request):
		misc = self.get_object()
		return misc