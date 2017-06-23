from __future__ import unicode_literals

from django.db import models
import re, bcrypt
# import flash
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')

def validateName(strInput):
    if len(strInput) < 2:
        return False
    elif len(strInput) > 45:
        return False
    elif not strInput.isalpha():
        return False
    return True

def hasNumbers(strInput):
    return any(char.isdigit() for char in strInput)

def hasUpper(strInput):
    return any(char.isupper() for char in strInput)

class AuthorManager(models.Manager):
    def verify(self, postData):
        print postData['author_first_name'], postData['author_last_name']
        if not validateName(postData['author_first_name']):
            return { 'error' : "Author's First name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols"}
        elif not validateName(postData['author_last_name']):
            return { 'error' : "Author's Last name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols"}
        else:
            author = Author.objects.create(
                first_name = postData['author_first_name'],
                last_name = postData['author_last_name']
            )
            return {
                'author': author
                }

class BookManager(models.Manager):
    def verify(self, postData):
        if postData['title'] < 1:
            return { 'error' : 'Title cannot be empty'}
        else:
            book = Book.objects.create(
                title = postData['title'],
                author = postData['author']
            )
            return {
                'book' : book
            }

class ReviewManager(models.Manager):
    def verify(self, postData):
        print "in ReviewManager"
        if postData['review'] < 1:
            return { 'error' : 'Review cannot be empty'}
        else:
            print "creating Review"
            review = Review.objects.create(
                review = postData['review'],
                book = postData['book'],
                user = postData['user'],
                rating_whole = postData['rating_whole'],
                rating_remainder = postData['rating_remainder']
            )
            return {
                'review' : review
            }
class UserManager(models.Manager):
    def register(self, postData):
        password = postData['password']
        if not validateName(postData['first_name']):
            return { 'error' : 'First name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols'}
        elif not validateName(postData['last_name']):
            return { 'error' : 'Last name should be greater than 2 characters and less than 45 characters and should not contain numbers or symbols'}
        elif not EMAIL_REGEX.match(postData['email']):
            return { 'error' : 'Please enter a valid email address'}
        elif len(postData['email']) < 7:
            return { 'error' : 'Email address must contain at least 7 characters in a proper email format eg. a@a.net '}
        elif UserName.objects.filter(email = postData['email']).count() >= 1:
            return { 'error' : 'This email address is already registered!'}
        elif len(password) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif not hasNumbers(password):
            return { 'error' : "Password should contain at least 1 number!"}
        elif not hasUpper(password):
            return { 'error' : "Password should contain at least 1 Uppercase letter!"}
        elif password != postData['confirm_password']:
            return { 'error' : 'Password and Confirm Password must match'}
        else:
            hashed_pw = bcrypt.hashpw(password.encode(encoding="utf-8", errors="strict"), bcrypt.gensalt())
            user = UserName.objects.create(
                first_name = postData['first_name'],
                last_name = postData['last_name'],
                email = postData['email'],
                password = hashed_pw
            )
            return {
                'user':user,
                'message': "Thank You For Registering!"
                }

    def login(self, postData):
        password = postData['password']
        if not EMAIL_REGEX.match(postData['email']):
            return { 'error' : 'Please enter a valid email address'}
        elif len(postData['email']) < 7:
            return { 'error' : 'Email address must contain at least 7 characters in a proper email format eg. a@a.net '}
        elif UserName.objects.filter(email = postData['email']).count() < 1:
            return { 'error' : 'You must first register!'}
        elif len(postData['password']) < 8:
            return { 'error' : 'Passwords connot be empty and must contain as least 8 characters/numbers'}
        elif not hasNumbers(password):
            return { 'error' : "Password should contain at least 1 number!"}
        elif not hasUpper(password):
            return { 'error' : "Password should contain at least 1 Uppercase letter!"}
        else:
            user = UserName.objects.get(email = postData['email'])
            hashed_pw = user.password
            if bcrypt.hashpw(password.encode(encoding="utf-8", errors="strict"), hashed_pw.encode(encoding="utf-8", errors="strict")) != hashed_pw:
                return { 'error' : 'Incorrect password!'}
            return {
                'user':user,
                'message' : "You Have Successfully Logged In!"
                }

# Create your models here.
class UserName(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()

class Author(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AuthorManager()

class Book(models.Model):
    title = models.CharField(max_length=45)
    author = models.ForeignKey(Author, related_name="books")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = BookManager()

class Review(models.Model):
    review = models.TextField(max_length=3000)
    book = models.ForeignKey(Book, related_name="book_reviews")
    user = models.ForeignKey(UserName, related_name="reviews")
    rating_whole = models.IntegerField(default= 0)
    rating_remainder = models.IntegerField(default= 0)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = ReviewManager()
