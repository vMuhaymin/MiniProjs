from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("" , views.viewTable, name="viewTable"),
    path("add/" , views.addForm_view, name="newReport"),

]
