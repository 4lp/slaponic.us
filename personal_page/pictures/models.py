from django.db import models
from smartfields import fields
from smartfields.dependencies import FileDependency
from smartfields.processors import ImageProcessor

class Picture(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=100, blank=True, default='')
	orig_image = fields.ImageField(upload_to = 'static/', dependencies=[
	FileDependency(attname='image', upload_to='static/pictures/', processor=ImageProcessor(
		format='JPEG', scale={'max_width': 900, 'max_height': 900})),
	FileDependency(attname='image_thumb', upload_to='static/pictures_thumb/', processor=ImageProcessor(
		format='JPEG', scale={'max_width': 300, 'max_height': 300})),
	])
	image = models.ImageField(upload_to='static/pictures/', null=True, blank=True, editable=False)
	image_thumb = models.ImageField(upload_to='static/pictures_thumb/', null=True, blank=True, editable=False)

	def __str__(self):
		return self.name
