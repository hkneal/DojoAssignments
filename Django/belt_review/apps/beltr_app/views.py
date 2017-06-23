from django.shortcuts import render, redirect
from .models import UserName, Author, Book, Review
import math
# Create your views here.


def index(req):
    return render(req, 'beltr_app/index.html')

def home(req, id):
    user = UserName.objects.get(id=id)
    recent_reviews = Review.objects.all().order_by('-created_at')
    all_books = Book.objects.all().order_by('created_at')
    reviewlst = Review.objects.filter(user=user.id).values_list("book", flat=True)
    context = {
        'user' : user,
        'recent_reviews': recent_reviews,
        'all_books' : all_books,
        'reviewlst': reviewlst
    }
    return render(req, 'beltr_app/books.html', context)

def login_reg(req):
    if req.method == 'POST':
        if req.POST['submit'] == 'Register':
            req.session['first_name'] = req.POST['first_name']
            req.session['last_name'] = req.POST['last_name']
            req.session['password'] = req.POST['password']
            req.session['confirm_password'] = req.POST['confirm_password']
            req.session['email'] = req.POST['email']
            postData = {
                'first_name' : req.session['first_name'],
                'last_name' : req.session['last_name'],
                'password' : req.session['password'],
                'confirm_password' : req.session['confirm_password'],
                'email' : req.session['email']
                }
            user = UserName.objects.register(postData)
            #in the case of Log In
        else:
            req.session['password'] = req.POST['password']
            req.session['email'] = req.POST['email']
            postData = {
                'password' : req.session['password'],
                'email' : req.session['email']
                }
            user = UserName.objects.login(postData)
        if 'error' in user:
            context = { 'error' : user}
            return render(req, 'beltr_app/index.html', context)
        #Pass the login or register message in user and pass user through session
        else:
            recent_reviews = Review.objects.all().order_by('-created_at')
            all_books = Book.objects.all().order_by('created_at')
            #if we want to restrict to one review per user
            reviewlst = Review.objects.filter(user=user['user'].id).values_list("book", flat=True)
            context = {
                'user' : user['user'],
                'message' : user['message'],
                'recent_reviews': recent_reviews,
                'all_books' : all_books,
                'reviewlst': reviewlst
            }
            return render(req, 'beltr_app/books.html', context)
    else:
        return redirect('/')

def book_add(req, id):
    if req.method == 'POST':
        user = UserName.objects.get(id=id)
        if req.POST['or_author_first'] and req.POST['or_author_last']:
            author_first_name = req.POST['or_author_first']
            author_last_name = req.POST['or_author_last']
        else:
            thisAuthor = Author.objects.get(id=req.POST['authorid'])
            author_first_name = thisAuthor.first_name
            author_last_name = thisAuthor.last_name
        postData = {
            'author_first_name' : author_first_name,
            'author_last_name' : author_last_name
        }
        author = Author.objects.verify(postData)
        if 'error' in author:
            context = {
                'error' : author,
                'user' : user
                }
            return render(req, 'beltr_app/book_add.html', context)
        else:
            postData = {
                'title' : req.POST['book_title'],
                'author': author['author']
            }
            book = Book.objects.verify(postData)
            if 'error' in book:
                context = {
                    'error' : book,
                    'user' : user
                    }
                return render(req, 'beltr_app/book_add.html', context)
            else:
                number = float(req.POST['rating'])
                if number >= 1:
                  whole = math.floor(number)
                  remainum = number - whole
                  if remainum > 0:
                      remainder = 1
                  else:
                      remainder = 0
                elif number < 1 and number > 0:
                      whole = 0
                      remainder = 1
                else:
                    whole = 0
                    remainder = 0
                postData = {
                    'user' : user,
                    'review' : req.POST['review'],
                    'rating_whole' : whole,
                    'rating_remainder' : remainder,
                    'book' : book['book']
                }
                review = Review.objects.verify(postData)
                if 'error' in review:
                    context = {
                        'error' : review,
                        'user' : user
                        }
                    return render(req, 'beltr_app/book_add.html', context)
                else:
                    thisBook = Book.objects.get(id=book['book'].id)
                    #Return a list of all book reviews for this book
                    # bookReviews = Book.book_reviews.all().filter(book=thisBook.id)
                    bookReviews = Review.objects.filter(book=thisBook.id).order_by('-created_at')
                    context = {
                        'book' : thisBook,
                        'reviews' : bookReviews,
                        'user' : user
                    }
                    return render(req, 'beltr_app/book_page.html', context)
    else:
        authors = Author.objects.all()
        user = UserName.objects.get(id=id)
        context = {
            'user' : user,
            'authors' : authors
        }
        return render(req, 'beltr_app/book_add.html', context)

def book_page(req, id, bid):
    user = UserName.objects.get(id=id)
    thisBook = Book.objects.get(id=bid)
    bookReviews = Review.objects.filter(book=thisBook.id).order_by('-created_at')
    context = {
        'book' : thisBook,
        'reviews' : bookReviews,
        'user' : user
    }
    return render(req, 'beltr_app/book_page.html', context)

def add_review(req, id, bid):
    if req.method == 'POST':
        print "in Add_Review"
        user = UserName.objects.get(id=id)
        thisBook = Book.objects.get(id=bid)
        number = float(req.POST['rating'])
        if number >= 1:
          whole = math.floor(number)
          remainum = number - whole
          if remainum > 0:
              remainder = 1
          else:
              remainder = 0
        elif number < 1 and number > 0:
              whole = 0
              remainder = 1
        else:
            whole = 0
            remainder = 0
        postData = {
            'user' : user,
            'review' : req.POST['review'],
            'rating_whole' : whole,
            'rating_remainder' : remainder,
            'book' : thisBook
        }
        review = Review.objects.verify(postData)
        if 'error' in review:
            context = {
                'error' : review,
                'user' : user
                }
            return render(req, 'beltr_app/book_page.html', context)
        else:
            thisBook = Book.objects.get(id=bid)
            bookReviews = Review.objects.filter(book=thisBook.id).order_by('-created_at')
            context = {
                'book' : thisBook,
                'reviews' : bookReviews,
                'user' : user
            }
            return render(req, 'beltr_app/book_page.html', context)
    else:
        return redirect('/')

def user_page(req, id):
    user = UserName.objects.get(id=id)
    bookReviews = Review.objects.filter(user=user.id).order_by('-created_at')
    context = {
        'reviews' : bookReviews,
        'user' : user
    }
    return render(req, 'beltr_app/user_page.html', context)

def delete_review(req, id):
    user = Review.objects.get(id=id).user
    Review.objects.get(id=id).delete()
    recent_reviews = Review.objects.all().order_by('-created_at')
    all_books = Book.objects.all().order_by('created_at')
    reviewlst = Review.objects.filter(user=user.id).values_list("book", flat=True)
    context = {
        'user' : user,
        'recent_reviews': recent_reviews,
        'all_books' : all_books,
        'reviewlst': reviewlst
    }
    return render(req, 'beltr_app/books.html', context)

def logout(req):
    return redirect('/')
