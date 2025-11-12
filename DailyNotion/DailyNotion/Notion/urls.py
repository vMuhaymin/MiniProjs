from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("add/" , views.addForm_view, name="newReport"),
    path("" , views.viewTable, name="newReporit")

]
