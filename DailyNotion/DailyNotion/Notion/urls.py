from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("newReport/" , views.addForm_view, name="newReport" )
   
]
