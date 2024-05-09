
from django.urls import path
from .views import  main, process_pdf

urlpatterns = [
    path('',main),
    path('process-pdf/', process_pdf, name='process_pdf'),
    
]
