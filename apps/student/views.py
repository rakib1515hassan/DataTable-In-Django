from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy

from django.contrib.auth import get_user_model
User = get_user_model()

from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.contrib.sessions.models import Session
from django.contrib import messages

from django.utils.decorators import method_decorator
from django.utils import timezone

from django.db.models.functions import Concat
from django.db.models import Q, Count, F, Value as V, CharField
from django.db.models.functions import ExtractMonth, ExtractYear

from django.http import HttpRequest, HttpResponse, JsonResponse, Http404, HttpResponseRedirect
from django.core.paginator import Paginator, EmptyPage
from django.core.exceptions import ValidationError

from datetime import datetime, timedelta
from random import randint

from django.views import View
from django.views import generic


## Custom
from django_setting_core.permission import is_superuser_or_staff, is_superadmin 
from apps.student.models import Student
from apps.student.forms import StudentForm
from apps.core.models import District


# Create your views here.
class StudentCreateView(generic.CreateView, LoginRequiredMixin):
    model = Student
    form_class = StudentForm
    template_name = "Student/create.html"
    success_url = reverse_lazy('student:student_list')

    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        field_errors = {field.name: field.errors for field in form}
        has_errors = any(field_errors.values())

        print("---------------------")
        print(f"Field = {field_errors}, HasErrors = {has_errors}")
        print(f"HasErrors = {has_errors}")
        print("---------------------")

        return self.render_to_response(self.get_context_data(
                form = form, 
                field_errors = field_errors, 
                has_errors   = has_errors
            ))
    
    

@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class StudentListView(generic.TemplateView, LoginRequiredMixin):
    template_name = "student/Datatable/list.html"

    def get_context_data(self, **kwargs):
        data = super().get_context_data(**kwargs)
        data['subjects'] = Student.SubjectType.choices
        data['citys'] = District.objects.all()
        return data




"""
    Student Delete
"""
# def StudentDeleteView(request):
#     if request.method == 'POST':
#         std_id = request.POST.get('std_id')

#         print("---------------------")
#         print("std_id =", std_id)
#         print("---------------------")
        
#         try:
#             # Perform deletion operation based on std_id
#             student = Student.objects.get(id=std_id)
#             student.delete()
#             return JsonResponse({'success': True})
#         except Student.DoesNotExist:
#             return JsonResponse({'success': False, 'error': 'Student not found'})
        

@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class StudentDeleteView(generic.DeleteView, LoginRequiredMixin):
    model = Student
    # success_url = reverse_lazy('admins:admin_list')

    def post(self, request, *args, **kwargs):
        std_id = request.POST.get('std_id', None)
      
        if std_id is not None:
            try:
                std = Student.objects.get(id = std_id)
                if std:
                    std.delete()
                    return JsonResponse({'success': True})
            except Student.DoesNotExist:
                messages.error(request, "Not Found!")
                messages.warning(request, "Please ensure the student ID is correct,<br>then try to delete it.")
                return redirect('error_404')
            
            except ValidationError as e:
                messages.error(request, "Validation Error!")
                messages.warning(request, "Please ensure the student ID is correct,<br>then try to delete it.")
                return redirect('error_404')
            
        messages.error(request, "Validation Error!")
        messages.warning(request, "ID Not Found!.")
        return redirect('error_404')
        



"""
    Student Details
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class StudentDetailsView(generic.DetailView, LoginRequiredMixin):
    model = Student
    template_name = "student/details.html"
    context_object_name = "std"

    # def get_context_data(self, *args, **kwargs):
    #     data = super().get_context_data(**kwargs)
    #     data['std'] = self.model.objects.get(id=self.kwargs['pk'])
    #     return data





"""
    Student Update
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class StudentUpdateView(generic.UpdateView, LoginRequiredMixin):
    model = Student
    template_name = "student/update.html"
    form_class = StudentForm
    context_object_name = "std"


    def get_success_url(self):
        # return reverse('admins:admin_details', kwargs={'pk': self.object.pk})
        return reverse('student:student_list')
    
    def form_valid(self, form):
        form.save()
        return super().form_valid(form)

    def form_invalid(self, form):
        field_errors = {field.name: field.errors for field in form}
        has_errors = any(field_errors.values())

        print("---------------------")
        print(f"Field = {field_errors}, HasErrors = {has_errors}")
        print(f"HasErrors = {has_errors}")
        print("---------------------")

        return self.render_to_response(self.get_context_data(
            form=form, 
            field_errors=field_errors, 
            has_errors=has_errors
            ))





