from django.shortcuts import render, redirect

from .models import Book
# Create your views here.
def index(req):
    books = Book.objects.all()
    context = {
        'books' : books
    }
    return render(req, 'booklst_app/index.html', context)

def add_book(req):
    Book.objects.create(
        title = req.POST['title'],
        author = req.POST['author'],
        category = req.POST['category']
    )
    return redirect('/')
