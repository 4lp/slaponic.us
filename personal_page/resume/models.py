from django.db import models

class Resume(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=100, blank=True, default='mikesresume', editable=False)
	resume = models.FileField(upload_to="static/resume/")

	def __str__(self):
		return self.name