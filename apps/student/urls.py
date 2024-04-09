from django.urls import path, include, re_path
from apps.student import views
from apps.student import datatable_view

app_name = 'student'

urlpatterns = [
    path('create/', views.StudentCreateView.as_view(), name='student_create'),
    path('list/', views.StudentListView.as_view(), name="student_list"), 

    path('details/<int:pk>/', views.StudentDetailsView.as_view(), name="student_details"), 
    path('update/<int:pk>/',  views.StudentUpdateView.as_view(),  name="student_update"), 
    
    # path('delete/', views.StudentDeleteView, name='student_delete'),
    path('delete/', views.StudentDeleteView.as_view(), name='student_delete'),



    ## Data Table
    path('data-table-data/', datatable_view.StudentDatatableList.as_view(), name="student_data_table_data"), 

    # url(r'^my/datatable/data/$', login_required(OrderListJson.as_view()), name='order_list_json'),


    # path('data-table-data/', views.student_data_table_data, name="student_data_table_data"), 

]
