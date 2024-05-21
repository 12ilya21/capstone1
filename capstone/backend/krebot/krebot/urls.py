from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from member_management import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/register/', views.RegisterView.as_view(), name='register'),
    path('api/login/', views.LoginView.as_view(), name='login'),
    path('', TemplateView.as_view(template_name='index.html')),  # 루트 URL을 처리
    re_path('.*', TemplateView.as_view(template_name='index.html')),  # 기타 모든 URL을 처리
]
