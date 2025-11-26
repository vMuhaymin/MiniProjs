from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("add/" , views.addForm_view, name="newReport"),
    path("" , views.viewTable, name="viewTable"),
    path("update/<int:id>" , views.updateTable , name = "updateTable"),
    path("delete/<int:id>" , views.deleteInfo, name = "deleteInfo")


]
