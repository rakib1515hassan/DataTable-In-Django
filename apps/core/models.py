from django.db import models


class TimestampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-created_at', '-updated_at']



class Division(TimestampedModel):
    name    = models.CharField(max_length=250, null=True, blank=True)
    bn_name = models.CharField(max_length=250, null=True, blank=True)
    lat     = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)
    long    = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)

    def __str__(self):
        return f"{self.name} ({self.bn_name})"
    

class District(TimestampedModel):
    division = models.ForeignKey(Division, related_name = 'district', on_delete=models.CASCADE)

    name    = models.CharField(max_length=250, null=True, blank=True)
    bn_name = models.CharField(max_length=250, null=True, blank=True)
    lat     = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)
    long    = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)

    def __str__(self):
        return f"{self.name} ({self.bn_name})"
    


class Upazila(TimestampedModel):
    district = models.ForeignKey(District, related_name = 'upazila', on_delete=models.CASCADE)

    name    = models.CharField(max_length=250, null=True, blank=True)
    bn_name = models.CharField(max_length=250, null=True, blank=True)
    lat     = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)
    long    = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)

    def __str__(self):
        return f"{self.name} ({self.bn_name})"
    


class PostCode(TimestampedModel):
    division = models.ForeignKey(Division, on_delete=models.CASCADE)
    district = models.ForeignKey(District, on_delete=models.CASCADE)

    upazila    = models.CharField(max_length=250, null=True, blank=True)
    postOffice = models.CharField(max_length=250, null=True, blank=True)
    postCode   = models.DecimalField(max_digits=11, decimal_places=7, null=True,blank=True)

    def __str__(self):
        post_code_integer = int(self.postCode)
        return f"{self.upazila}, {self.postOffice}-{str(post_code_integer)}"
