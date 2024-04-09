from django.urls import path
from apps.employee import views

app_name = 'employee'


urlpatterns = [
    path('create/', views.EmployeeCreateView.as_view(), name='employee_create'),
    path('list/',   views.EmployeeListView.as_view(),   name='employee_list'),
    path('delete/', views.EmployeeDeleteView.as_view(), name='employee_delete'),
    path('details/<uuid:pk>/', views.EmployeeDetailsView.as_view(), name='employee_details'),
    path('update/<uuid:pk>/',  views.EmployeeUpdateView.as_view(), name='employee_update'),

]