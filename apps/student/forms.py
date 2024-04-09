from django import forms
from django.forms import (
    ModelForm, TextInput, Select, CheckboxInput, NumberInput, FileInput, SelectMultiple, Textarea, \
    PasswordInput, EmailInput
)

from django.contrib.auth import get_user_model
User = get_user_model()

from apps.student.models import Student



class StudentForm(forms.ModelForm):

    class Meta:
        model = Student
        # fields = '__all__'

        fields = ['name', 'roll', 'phone', 'gender', 'dob', 'subject', 'description', 'image', 'cv', 'is_verified', 'city']

        widgets = {
            'name' : TextInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Write student name',
                    'required': True,
                }),

            'roll' : NumberInput( attrs={
                    'class': 'form-control',  
                    'placeholder': 'Write student roll',
                    'required': True,
                }),

            'gender' : Select( attrs={
                    'class': 'form-select',  
                    'placeholder': 'select student gender',
                    'required': True,
                }),

            'subject' : Select( attrs={
                    'class': 'form-select',  
                    'placeholder': 'select student subject',
                }),
            
            'image' : FileInput( attrs={
                    'class': 'form-control', 
                    'accept' : 'image/*',
                    # 'style': 'border-style: dotted;',
                }),

            'cv' : FileInput( attrs={
                    'class': 'form-control', 
                    'accept' : '.pdf',
                    # 'style': 'border-style: dotted;',
                }),

            'phone' : TextInput( attrs={
                    'class': 'form-control', 
                    'placeholder': 'Write student phone number',
                    'required': True,
                }),

            'dob': forms.DateInput(
                    format=('%Y-%m-%d'),
                    attrs={'class': 'form-control',
                        'placeholder': 'Select Birthdate',
                        'type': 'date'
                }),

            'is_verified' : CheckboxInput( attrs={
                    'class': 'form-check form-switch', 
                    'type' : 'checkbox', 
                }),



            'city': Select(attrs={
                    'class': 'form-select singel_select sub_division', 
                }),

            'description' : Textarea( attrs={
                    'class': 'form-control', 
                    'rows' : 5, 
                }),
            
            # 'email' : EmailInput(attrs={
            #         'class': 'form-control', 
            #         'placeholder': 'Enter Email',
            #         'required': True
            #     }),
            
        }



