from rest_framework import serializers

class ResumeSerializer(serializers.Serializer):
	pk = serializers.IntegerField(read_only=True)
	created = serializers.DateTimeField()
	name = serializers.CharField(max_length=100)
	resume = serializers.CharField(max_length=1000)
	# resume = serializers.SerializerMethodField()

	# def get_resume(self, instance):
        # # returning image url if there is an image else blank string
	# 	return instance.resume.url if instance.resume else ''
