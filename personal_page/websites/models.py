from django.db import models
from smartfields import fields
from smartfields.dependencies import FileDependency
from smartfields.processors import ImageProcessor

class Website(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=100, blank=True, default='')
	link = models.TextField()
	description = models.TextField()
	#orig_image = fields.ImageField(upload_to = 'static/', dependencies=[
	#FileDependency(attname='image', upload_to='static/websites/', processor=ImageProcessor(
	#	format='JPEG', scale={'max_width': 900, 'max_height': 900}))])
	#image = models.ImageField(upload_to='static/websites/', null=True, blank=True, editable=False) 
	image = models.CharField(max_length=1000, blank=True, default='')

	def __str__(self):
		return self.name
