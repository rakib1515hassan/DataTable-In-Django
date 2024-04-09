from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from apps.users.manager import UserManager
import uuid
from apps.core.models import TimestampedModel

import datetime
import secrets
import random

## AbstructBaseUser has provite some default field ( password, last_login, is_active )
class User(AbstractBaseUser, TimestampedModel, PermissionsMixin):

    class GenderType(models.TextChoices):
        MALE   = 'male'
        FEMALE = 'female'
        OTHER  = 'other'

    class UserType(models.TextChoices):
        ADMIN    = 'admin'
        EMPLOYEE = 'employee'

    id        = models.UUIDField( primary_key = True, unique=True, default = uuid.uuid4, editable=False )
    email     = models.EmailField(
                    unique=True,
                    verbose_name="email address",
                    max_length=255,
                )
    phone     = models.CharField(
                    unique=True,
                    verbose_name="phone number",
                    max_length=30,
                    null = True,
                    blank=True
                )
    first_name = models.CharField(max_length=255, null=True, blank=True)
    last_name  = models.CharField(max_length=255, null=True, blank=True)

    gender   = models.CharField(max_length=10, choices=GenderType.choices, null=True, blank=True)
    dob      = models.DateField(null=True, blank=True) 

    image    = models.ImageField(upload_to="ProfileImage/", null=True, blank=True)

    joining     = models.DateField(null=True, blank=True)
    termination = models.DateField(null=True, blank=True)
    user_salary = models.IntegerField(default=0, null=True, blank=True)

    ## User Permission and Roll
    is_active   = models.BooleanField(default = True)
    is_admin    = models.BooleanField(default = False)
    is_verified = models.BooleanField(default = False)

    ## User Address
    address = models.TextField(null=True, blank=True)

    user_type = models.CharField(
        max_length = 10, 
        choices = UserType.choices,
        default = UserType.EMPLOYEE
    )

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    
    def __str__(self):
        return self.email
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?"
        # Simplest possible answer: Yes, always
        # return True      ## Default
        return self.is_admin

    def has_module_perms(self, app_label):
        "Does the user have permissions to view the app `app_label`?"
        # Simplest possible answer: Yes, always
        # return True      ## Default
        return self.is_admin

    @property
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff
        return self.is_admin
    
    # @property
    # def first_name(self):
    #     if self.name:
    #         parts = self.name.rsplit(" ", 1)
    #         return parts[0]

    # @property
    # def last_name(self):
    #     if self.name:
    #         parts = self.name.rsplit(" ", 1)
    #         return parts[1] if len(parts) > 1 else ""

    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"
    

    @property
    def age(self):
        if self.dob:
            today = datetime.date.today()
            age   = today.year - self.dob.year - ((today.month, today.day) < (self.dob.month, self.dob.day))
            return age
        else:
            return None

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'