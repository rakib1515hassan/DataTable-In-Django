# Register your models here.
from django.contrib import admin

from apps.core.models import Division, District, Upazila, PostCode




admin.site.register(Division)
admin.site.register(District)
admin.site.register(Upazila)
admin.site.register(PostCode)