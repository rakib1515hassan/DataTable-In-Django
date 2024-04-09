from django.contrib import admin
from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
User = get_user_model()

from apps.users.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin



# Register your models here.
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ['id', 'first_name', 'last_name', 'email', 'is_verified', 'user_type']

    list_filter = ['is_verified', 'user_type']

    fieldsets = [
        (None, {"fields": ['email', 'password', 'created_at', 'updated_at']}),
        ("Personal info", {"fields": ['first_name', 'last_name', 'phone', 'image', 'dob', 'gender', 'address']}),
        ("Permissions", {"fields": ['is_superuser', 'is_admin', 'is_active', 'is_verified', 'user_type']}),
    ]

    add_fieldsets = [
        (
            None,
            {
                "classes": ["wide"],
                "fields": ["email", "password", "password2", "is_verified", "first_name", "last_name", "phone", "image", "user_type", 'dob', 'gender', 'address'],
            },
        ),
    ]

    search_fields = ["email", "phone", "first_name", "last_name"]

    ordering = ["-created_at", "email"]  # Latest users first, then by email

    filter_horizontal = [] ## 'filter_horizontal[0]' must be a many-to-many field.

    readonly_fields = ['created_at', 'updated_at']  # Add these readonly fields

# Now register the new UserAdmin...
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)