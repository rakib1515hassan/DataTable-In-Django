from django import forms
from django.forms import (
    ModelForm, TextInput, Select, CheckboxInput, NumberInput, FileInput, SelectMultiple, Textarea, \
    PasswordInput, EmailInput
)

from django.contrib.auth import get_user_model
User = get_user_model()



class EmployeeCreationForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phone', 'image', 'gender', 'dob', 'is_verified', 'address', 'joining', 'user_salary']

        widgets = {
            'first_name' : TextInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Enter First Name',
                    'required': True,
                }),

            'last_name' : TextInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Enter Last Name',
                    'required': True,
                }),

            'email' : EmailInput(attrs={
                    'class': 'form-control', 
                    'placeholder': 'Enter Email',
                    'required': True
                }),

            'phone' : TextInput( attrs={
                    'class': 'form-control', 
                    'placeholder': 'Enter Phone Number',
                    'required': True
                }),

            'dob': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select Birthdate',
                        'type': 'date'
                }),

            'image' : FileInput( attrs={
                    # 'class': 'form-control show-img', 
                    'class': 'form-control', 
                    'accept' : 'image/jpeg image/png image/jpg',
                    # 'style': 'border-style: dotted;',
                }),
            
            'gender' : Select(attrs={
                    'class': 'form-select js-choice', 
                }),
            
            'address' : Textarea(attrs={
                    'class': 'form-select',
                    'placeholder': 'Enter the address...',
                    'rows':4,
                    'cols':50, 
                }),

            'joining': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select joining date...',
                        'type': 'date'
                }),
            'user_salary': NumberInput(attrs={
                    'class': 'form-control',
                    'placeholder': 'Enter the salary',
                }),
        }


    




class EmployeeUpdateForm(forms.ModelForm):

    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'phone', 'image', 'gender', 'dob', 'address', 
            'joining', 'termination', 'user_salary'
        ]

        widgets = {
            'first_name' : TextInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Enter First Name',
                    'required': True,
                }),

            'last_name' : TextInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Enter Last Name',
                    'required': True,
                }),

            'email' : EmailInput(attrs={
                    'class': 'form-control', 
                    'placeholder': 'Enter Email',
                    'required': True
                }),

            'phone' : TextInput( attrs={
                    'class': 'form-control', 
                    'placeholder': 'Enter Phone Number',
                    'required': True
                }),

            'dob': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select Birthdate',
                        'type': 'date'
                }),

            'image' : FileInput( attrs={
                    # 'class': 'form-control show-img', 
                    'class': 'form-control', 
                    'accept' : 'image/jpeg image/png image/jpg',
                    # 'style': 'border-style: dotted;',
                }),
            
            'gender' : Select(attrs={
                    'class': 'form-select js-choice', 
                }),
            
            'address' : Textarea(attrs={
                    'class': 'form-select',
                    'placeholder': 'Enter the address...',
                    'rows':4,
                    'cols':50, 
                }),

            'joining': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select joining date...',
                        'type': 'date'
                }),

            'termination': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select termination date...',
                        'type': 'date'
                }),
            'user_salary': NumberInput(attrs={
                    'class': 'form-control',
                    'placeholder': 'Enter the salary',
                }),
        }





# class UserUpdateForm(forms.ModelForm):

#     class Meta:
#         model = User
#         # fields = ['name', 'email', 'phone', 'user_img', 'user_cov_img']
#         fields = [
#             'name', 'email', 'phone', 'user_img', 'user_cov_img', 'dob', 'gender',
#             'division', 'sub_division', 'zip_code', 'home',
#         ]

#         widgets = {
#             'name'  : TextInput(attrs={  'class': 'form-control', 'id': "id_name",  'placeholder': "Name",}),
#             'email' : EmailInput(attrs={ 'class': 'form-control', 'id': "id_email", 'placeholder': "Email",}),
#             'phone' : TextInput(attrs={  'class': 'form-control', 'id': "phone", 'placeholder': "Phone Number",}),

#             'user_img'    : FileInput( attrs={'class': 'form-control', 'id': 'user_img'}),
#             'user_cov_img': FileInput( attrs={'class': 'form-control', 'id': 'user_cov_img'}),

#             'dob': forms.DateInput(
#                         format=('%Y-%m-%d'),
#                         attrs={'class': 'form-control',
#                             'placeholder': 'Select a date',
#                             'type': 'date'
#                     }),

#             'gender': forms.Select(attrs={
#                 'class': 'form-control js-choice', 
#                 'id': "gender", 
#             }),

#             'division': forms.TextInput(
#                 attrs={'class': 'form-control', 'id': "division", 'placeholder': "Division", }),
#             'sub_division': forms.TextInput(
#                 attrs={'class': 'form-control', 'id': "sub_division", 'placeholder': "Sub-Division", }),
#             'zip_code': forms.TextInput(
#                 attrs={'class': 'form-control', 'id': "zip_code", 'placeholder': "Zip-Code", }),
#             'home': forms.TextInput(
#                 attrs={'class': 'form-control', 'id': "home", 'placeholder': "Street Address", }),

#             # 'is_superuser': CheckboxInput(attrs={'class': 'form-check-input', 'id': "is_superuser", }),
#             # 'is_admin'    : CheckboxInput(attrs={'class': 'form-check-input', 'id': "is_admin", }),
#             # 'is_verified' : CheckboxInput(attrs={'class': 'form-check-input', 'id': "is_verified", }),
#             # 'is_active'   : CheckboxInput(attrs={'class': 'form-check-input', 'id': "is_active", }),
#         }

#     def clean(self):
#         cleaned_data = super().clean()
#         user_img = cleaned_data.get('user_img')
#         user_cov_img = cleaned_data.get('user_cov_img')

#         if not user_img:
#             instance = self.instance
#             cleaned_data['user_img'] = instance.user_img
            
#         if not user_cov_img:
#             instance = self.instance
#             cleaned_data['user_cov_img'] = instance.user_cov_img

#         return cleaned_data
    
