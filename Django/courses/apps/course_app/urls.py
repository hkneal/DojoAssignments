from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^addCourse$', views.add_course, name='add_course'),
    # url(r'^courses/comment/(?P<id>\d+$)', views.comment),
    url(r'^courses/add_comment/(?P<id>\d+$)', views.add_comment, name='add_comment'),
    url(r'^courses/comment_page/(?P<id>\d+$)', views.comment_page, name= 'comment_page'),
    url(r'^courses/destroy/(?P<id>\d+$)', views.remove),
    url(r'^courses/remove_course/(?P<id>\d+$)', views.remove_course, name='remove_course')
]
