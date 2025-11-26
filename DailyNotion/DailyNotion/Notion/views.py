from django.shortcuts import render, HttpResponse,redirect
from .forms import NoteForm
from .models import Note
# Create your views here.
def addForm_view(request):
    form = NoteForm()
    if request.method == "POST":
        form = NoteForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')

    return render(request, "addReport.html", {"form":form})


def viewTable(request):
    form = Note.objects.all()
    return render(request, "StudyReport.html", {'notes' : form})

def updateTable(request, id ):
    item = Note.objects.get(id = id)

    if request.method == "GET" and request.GET :
        form= NoteForm(request.GET , instance= item )
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = NoteForm(instance = item)
    return render(request, 'update.html', {'form': form} )

def deleteInfo(request, id):
    item= Note.objects.get(id = id)
    form = NoteForm(instance = item)
    if request.method =="POST":
        item.delete()
        return redirect('/')
    return render(request, 'delete.html', {"form": form} )

