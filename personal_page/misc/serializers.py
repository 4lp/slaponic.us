from rest_framework import serializers

class MiscSerializer(serializers.Serializer):
	pk = serializers.IntegerField(read_only=True)
	created = serializers.DateTimeField()
	name = serializers.CharField(max_length=100)
	image = serializers.SerializerMethodField()

	def get_image(self, instance):
        # returning image url if there is an image else blank string
		return instance.image.url if instance.image else ''
