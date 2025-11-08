from django.shortcuts import render, HttpResponse
from .form import NoteForm

# Create your views here.
def addForm_view(request):
    form = NoteForm()
    if request.method == "POST":
        form = NoteForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Success")
    return render(request, "addReport.html", {"form":form})