from django.shortcuts import render, redirect

from .models import Book, Author
# Create your views here.
def index(request):
    books = Book.objects.all()
    authors = Author.objects.all()
    context = {
        'books' : books,
        'authors' : authors
    }
    return render(request, 'book_app/index.html', context)

def add_book(request):
    theAuthor = Author.objects.get(id=request.POST['author'])
    abook = Book.objects.create(
        title = request.POST['title'],
        # author = theAuthor,
        category = request.POST['category'],
        in_print = request.POST['in_print']
    )
    abook.save()
    return redirect('/')

def add_author(request):
    Author.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name']
    )
    return redirect('/')

def add_author_toBook(request):
    #use this for ManyToManyField
    theAuthor = Author.objects.get(id=request.POST['author'])
    theBook = Book.objects.get(id=request.POST['title'])
    theBook.author.add(theAuthor)
    theBook.save()
    return redirect('/')
