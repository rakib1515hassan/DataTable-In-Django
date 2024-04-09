# For Data Table
from django_datatables_view.base_datatable_view import BaseDatatableView
from django.utils.html import escape

from datetime import datetime, timedelta
from django.utils import timezone
from django.utils.dateformat import format

from apps.student.models import Student
from apps.core.utils2 import CustomPaginator, ExcelDataDownload


"""
    NOTE:- This is the Data table Integration link

    To Install:- pip install django-datatables-view

    Documentation Like :- https://pypi.org/project/django-datatables-view/

"""

# class StudentDatatableList(BaseDatatableView):
#     # The model that the DataTable represents
#     model = Student
    
#     # Define columns that should be returned in the JSON response
#     columns = ['id', 'image', 'name', 'roll', 'phone']

    
#     # Optionally, define column names for more complex queries
#     column_names = ['id', 'image', 'name', 'roll', 'phone']



## NOTE: Another example of views.py customisation
class StudentDatatableList(BaseDatatableView):
    def get_initial_queryset(self):
        return Student.objects.all()

    def filter_queryset(self, qs):
        search = self.request.GET.get('search[value]', None)
        if search:
            qs = (
                qs.filter(name__icontains=search) |
                qs.filter(roll__icontains=search) |
                qs.filter(phone__icontains=search) |
                qs.filter(subject__icontains=search) |
                qs.filter(city__name__icontains=search) |
                qs.filter(gender__icontains=search)
            )

        subject_filter  = self.request.GET.get('subject')
        city_filter     = self.request.GET.get('city')
        created_at_from = self.request.GET.get('created_at_from')
        created_at_to   = self.request.GET.get('created_at_to')
        is_verified_filter = self.request.GET.get('is_verified')

        # print("---------------------")
        # print("subject_filter =", subject_filter)
        # print("city_filter =", city_filter)
        # print("is_verified_filter =", is_verified_filter)
        # print("created_at_from =", created_at_from)
        # print("created_at_to =", created_at_to)
        # print("---------------------")

        if subject_filter:
            qs = qs.filter(subject=subject_filter)

        if city_filter:
            qs = qs.filter(city__id=city_filter)

        if is_verified_filter is not None:
            is_verified_filter = is_verified_filter.lower()  # Convert to lowercase
            if is_verified_filter == 'true':
                qs = qs.filter(is_verified=True)
            elif is_verified_filter == 'false':
                qs = qs.filter(is_verified=False)


        # if created_at_from:
        #     qs = qs.filter(created_at__gte=created_at_from)

        # if created_at_to:
        #     qs = qs.filter(created_at__lte=created_at_to)

        # if created_at_from:
        #     created_at_from_date = datetime.strptime(created_at_from, '%Y-%m-%d').date()
        #     qs = qs.filter(created_at__date__gte=created_at_from_date)

        # if created_at_to:
        #     # created_at_to_date = datetime.strptime(created_at_to, '%Y-%m-%d').date() + timedelta(days=1)
        #     created_at_to_date = datetime.strptime(created_at_to, '%Y-%m-%d').date()
        #     qs = qs.filter(created_at__date__lt=created_at_to_date)


        if created_at_from:
            created_at_from_date = datetime.strptime(created_at_from, '%Y-%m-%d')
            created_at_from_date = timezone.make_aware(created_at_from_date)
            created_at_from_date = created_at_from_date.replace(hour=0, minute=0, second=0)  # Time beginning midnight
            print("+++++++++",created_at_from_date)
            qs = qs.filter(created_at__gte=created_at_from_date)

        if created_at_to:
            created_at_to_date = datetime.strptime(created_at_to, '%Y-%m-%d')
            created_at_to_date = timezone.make_aware(created_at_to_date)
            created_at_to_date = created_at_to_date.replace(hour=23, minute=59, second=59)  # Set the time to the end of the day (23:59:59)
            print("---------",created_at_to_date)
            qs = qs.filter(created_at__lte=created_at_to_date)

        return qs

    def prepare_results(self, qs):
        json_data = []
        for student in qs:
            json_data.append({
                'id': escape(str(student.id)),
                'image': escape(student.image),
                'name': escape(student.name),
                'dob': escape(student.dob.strftime('%a, %d %b %Y')),
                'gender': escape(student.get_gender_display()),
                'phone': escape(student.phone),
                'city': escape(student.city.name),
                'city_bd': escape(student.city.bn_name),
                'roll': escape(student.roll),
                'subject': escape(student.get_subject_display()),
                'is_verified': student.is_verified,
                'created_at': escape(student.created_at.strftime('%d/%m/%Y %H:%M %p')),
                'updated_at': escape(student.updated_at.strftime('%d/%m/%Y %H:%M %p')),
            })
        return json_data
    

    # def get(self, request, *args, **kwargs):

    #     if 'export' in request.GET:
    #         qs = self.filter_queryset(self.get_initial_queryset())
    #         export_data = self.prepare_results(qs)

    #         print("--------------------")
    #         print("Total Data =", export_data.count())
    #         print("--------------------")

    #         if export_data:
    #             excel_data = [
    #                 ['S/N', 'Name', 'Roll No' 'Phone', 'Gender', 'City', 'Subject', 'Birth Date', 'Create Date', 'Updated Date', 'Verification Status'],
    #             ]

    #             for index, obj in enumerate(export_data, start=1):
    #                 dob = obj.dob.strftime('%d-%m-%Y') if obj.dob else ''
    #                 excel_data.append([
    #                     index,
    #                     obj.name,
    #                     obj.roll,
    #                     obj.phone,
    #                     obj.gender.capitalize() if obj.gender else '',
    #                     obj.city,
    #                     obj.subject,
    #                     dob,
    #                     obj.created_at.strftime('%d-%m-%Y %I:%M:%S %p'),
    #                     obj.updated_at.strftime('%d-%m-%Y %I:%M:%S %p'),
    #                     'Verified' if obj.is_verified else 'Unverified',
    #                 ])
                
    #             excel_exporter = ExcelDataDownload(excel_data, filename='StudentData_export')
    #             return excel_exporter.generate_response()

    #     return super().get(request, *args, **kwargs)
    

    
        # if 'export' in request.GET:
        #     export_data = qs
        
        # if export_data:

        #     # Prepare the data for Excel export
        #     excel_data = [
        #         ['S/N', 'Name', 'Roll No' 'Phone', 'Gender', 'City', 'Subject', 'Birth Date', 'Create Date', 'Updated Date', 'Verification Status'],
        #     ]

        #     for index, obj in enumerate(export_data, start=1):
        #         dob = obj.dob.strftime('%d-%m-%Y') if obj.dob else ''
        #         excel_data.append([
        #             index,
        #             obj.name,
        #             obj.roll,
        #             obj.phone,
        #             obj.gender.capitalize() if obj.gender else '',
        #             obj.city,
        #             obj.subject,
        #             dob,
        #             obj.created_at.strftime('%d-%m-%Y %I:%M:%S %p'),
        #             obj.updated_at.strftime('%d-%m-%Y %I:%M:%S %p'),
        #             'Verified' if obj.is_verified else 'Unverified',
        #         ])

            
        #     excel_exporter = ExcelDataDownload(excel_data, filename='StudentData_export')
        #     return excel_exporter.generate_response()
