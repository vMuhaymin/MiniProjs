from django.shortcuts import render, HttpResponse
from .forms import NoteForm
from .models import Note
# Create your views here.
def addForm_view(request):
    form = NoteForm()
    if request.method == "POST":
        form = NoteForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Success")

    return render(request, "addReport.html", {"form":form})


def viewTable(request):
    form = Note.objects.all() 
    return render(request, "StudyReport.html", {'notes' : form})
