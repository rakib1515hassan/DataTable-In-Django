from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy

from django.contrib.auth import get_user_model
User = get_user_model()

from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth.mixins import LoginRequiredMixin
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
from apps.core.utils2 import CustomPaginator, ExcelDataDownload
from apps.employee.forms import EmployeeCreationForm, EmployeeUpdateForm


"""
    Employee Create
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class EmployeeCreateView(generic.CreateView, LoginRequiredMixin):
    model = User
    form_class = EmployeeCreationForm
    template_name = "employee/create.html"
    success_url = reverse_lazy('employee:employee_list')

    # def form_valid(self, form):
    #     form.save()
    #     return super().form_valid(form)

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
    



"""
    Employee List
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class EmployeeListView(View, LoginRequiredMixin):
    template_name = "employee/list.html"
    obj_per_page = 10

    def get_queryset(self):
        queryset = User.objects.filter(
                user_type = User.UserType.EMPLOYEE
            ).order_by('-created_at').exclude(is_admin=True)

        search_query = self.request.GET.get('search', '')

        if search_query:
            queryset = queryset.annotate(
                full_name = Concat(
                    'first_name', V(' '), 'last_name', output_field=CharField()
                )
            ).filter(
                Q(id__icontains = search_query)  
                | Q(first_name__icontains = search_query)  
                | Q(last_name__icontains  = search_query)  
                | Q(full_name__icontains  = search_query)  
                | Q(email__icontains = search_query) 
                | Q(phone__icontains = search_query)
            )

            # queryset = [user for user in queryset if search_query.lower() in (user.first_name + ' ' + user.last_name).lower()]

        return queryset


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        query_params = {}

        ## NOTE:- Filter values from the GET parameters
        is_verified = request.GET.get('is_verified', '')
        if is_verified != '':
            queryset = queryset.filter(is_verified=bool(int(is_verified)))
            query_params['is_verified'] = is_verified

        joining_from = self.request.GET.get('joining_from', '')
        if joining_from:
            queryset = queryset.filter(joining__gte=joining_from)
            query_params['joining_from'] = joining_from

        joining_to = self.request.GET.get('joining_to', '')
        if joining_to:
            queryset = queryset.filter(joining__lte=joining_to)
            query_params['joining_to'] = joining_to

        created_at_from = self.request.GET.get('created_at_from', '')
        if created_at_from:
            queryset = queryset.filter(created_at__gte=created_at_from)
            query_params['created_at_from'] = created_at_from

        created_at_to = self.request.GET.get('created_at_to', '')
        if created_at_to:
            queryset = queryset.filter(created_at__lte=created_at_to)

            query_params['created_at_to'] = created_at_to

        query_params_string = '&'.join([f"{key}={value}" for key, value in query_params.items()])


        # if created_at != '':
        #     if 'to' in created_at:
        #         from_date_str, to_date_str = created_at.split(" to ")
        #         from_date = datetime.strptime(from_date_str, "%d/%m/%y")
        #         to_date   = datetime.strptime(to_date_str, "%d/%m/%y")

        #         queryset = queryset.filter(created_at__range=[from_date, to_date])
        #     else:
        #         try:
        #             specific_date = datetime.strptime(created_at, '%d/%m/%y') 
        #             queryset = queryset.filter(created_at__date=specific_date) # Handle specific date
        #         except ValueError:
        #             pass # Handle invalid date format

        # ## NOTE:- Check if the export button is clicked
        export_data = ''

        if 'export' in request.GET:
            export_data = queryset
        
        elif 'export_all' in request.GET:
            export_data = User.objects.all()

        if export_data:

            # Prepare the data for Excel export
            excel_data = [
                ['No', 'Name', 'Email', 'Phone', 'User Type', 'Join Date', 'Create Date', 'Updated Date', 'Verification Status'],
            ]

            for index, user in enumerate(export_data, start=1):
                joining_date = user.joining.strftime('%d-%m-%Y') if user.joining else ''  # Check if joining is not None
                excel_data.append([
                    index,
                    user.name,
                    user.email,
                    user.phone,
                    user.user_type.capitalize() if user.user_type else '',
                    joining_date,
                    user.created_at.strftime('%d-%m-%Y %I:%M:%S %p'),
                    user.updated_at.strftime('%d-%m-%Y %I:%M:%S %p'),
                    'Verified' if user.is_verified else 'Unverified',
                ])

            
            excel_exporter = ExcelDataDownload(excel_data, filename='UsersData_export')
            return excel_exporter.generate_response()


        ## NOTE:- For Pagination
        custom_paginator = CustomPaginator(queryset, self.obj_per_page)
        paginated_data = custom_paginator.get_paginated_data(request)

        context = {
            'employee': paginated_data['page_obj'],
            'page_obj': paginated_data['page_obj'],
            'page_range': paginated_data['page_range'],
            'queryset_count': queryset.count(),
            'query_params_string': query_params_string,
        }

        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):

        if 'delete_list' in request.POST:
            # Split the string into a list of IDs
            delete_ids = request.POST.get('delete_id_list', '').split(',')  

            # Convert the IDs to integers (This is not need because ID is uuid)
            # delete_ids = [int(id) for id in delete_ids if id.isdigit()]  

            # Delete the employee with the selected IDs
            User.objects.filter(id__in=delete_ids).delete()

        return redirect('employee:employee_list')




"""
    Employee Delete
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class EmployeeDeleteView(generic.DeleteView, LoginRequiredMixin):
    model = User
    success_url = reverse_lazy('employee:employee_list')

    def post(self, request, *args, **kwargs):
        user_id = request.POST.get('user_id', None)
      
        if user_id is not None:
            try:
                user = User.objects.get(id = user_id)
                if user:
                    user.delete()
                    return redirect(self.success_url)
            except User.DoesNotExist:
                messages.error(request, "User Is Not Found!")
                messages.warning(request, "Please ensure the employee ID is correct,<br>then try to delete it.")
                return redirect('error_404')
            
            except ValidationError as e:
                messages.error(request, "Validation Error!")
                messages.warning(request, "Please ensure the employee ID is correct,<br>then try to delete it.")
                return redirect('error_404')
            
        messages.error(request, "Validation Error!")
        messages.warning(request, "ID Not Found!.")
        return redirect('error_404')
        
    # def delete(self, request, *args, **kwargs):
    #     try:
    #         user_id = self.kwargs['pk']  
    #         print("-------------------")
    #         print(f"Deleting user with ID: {user_id}")
    #         print("-------------------")
    #         return super().delete(request, *args, **kwargs)  # Let the parent class handle deletion
    #     except User.DoesNotExist:
    #         messages.error(request, "User Is Not Found!")
    #         return redirect('error_404')



"""
    Employee Details
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class EmployeeDetailsView(generic.DetailView, LoginRequiredMixin):
    model = User
    template_name = "employee/details.html"
    context_object_name = "emp"

    def get_context_data(self, *args, **kwargs):
        data = super().get_context_data(**kwargs)
        data['emp'] = self.model.objects.get(id=self.kwargs['pk'])
        return data
    




"""
    Employee Update
"""
@method_decorator(user_passes_test(is_superuser_or_staff, 
    login_url=reverse_lazy('auth:login')), name='dispatch')
class EmployeeUpdateView(generic.UpdateView, LoginRequiredMixin):
    model = User
    template_name = "employee/update.html"
    form_class = EmployeeUpdateForm
    context_object_name = "emp"

    def get_success_url(self):
        return reverse('employee:employee_details', kwargs={'pk': self.object.pk})
    
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
    


