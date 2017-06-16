from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^addBook$', views.add_book, name="add_Book")
]
