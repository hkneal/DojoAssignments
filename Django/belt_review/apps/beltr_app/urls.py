from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^books/login$', views.login_reg, name='login_reg'),
    url(r'^books/(?P<id>\d+)$', views.home, name='home_url'),
    url(r'^books/add/(?P<id>\d+)$', views.book_add, name='add_book'),
    url(r'^books/(?P<id>\d+)/(?P<bid>\d+)$', views.book_page, name='book_page'),
    url(r'^books/(?P<id>\d+)/(?P<bid>\d+)/add_review$', views.add_review, name='add_review'),
    url(r'^books/(?P<id>\d+)/user$', views.user_page, name='user_page'),
    url(r'^books/(?P<id>\d+)/delete$', views.delete_review, name='delete_review'),
    url(r'^logout$', views.logout, name='logout')
]
