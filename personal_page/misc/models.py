from django.db import models
from smartfields import fields
from smartfields.dependencies import FileDependency
from smartfields.processors import ImageProcessor

class Misc(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=100, blank=True, default='')
	orig_image = fields.ImageField(upload_to = 'static/', dependencies=[
	FileDependency(attname='image', upload_to='static/misc/', processor=ImageProcessor(
		format='JPEG', scale={'max_width': 900, 'max_height': 900})),
	])
	image = models.ImageField(upload_to='static/misc/', null=True, blank=True, editable=False)

	def __str__(self):
		return self.name
