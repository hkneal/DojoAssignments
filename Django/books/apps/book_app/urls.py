from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^addBook$', views.add_book, name="add_Book"),
    url(r'^addAuthor$', views.add_author, name="add_Author"),
    url(r'^addAuthorToBook$', views.add_author_toBook, name="add_Author_toBook")
]
