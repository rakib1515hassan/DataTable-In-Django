from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', include('apps.auth.urls',  namespace='auth')),
    path('', include('apps.dashboards.urls', namespace='dashboards')),
    path('admins/', include('apps.admin.urls', namespace='admins')),
    path('employee/', include('apps.employee.urls', namespace='employee')),
    path('student/', include('apps.student.urls', namespace='student')),


    ## Error 404 and 500 responses
    path("error-404/", TemplateView.as_view(template_name="error/404.html"), name="error_404"),
    path("error-500/", TemplateView.as_view(template_name="error/500.html"), name="error_500"),

]