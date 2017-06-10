from django.conf.urls import url
from . import views
urlpatterns = [
    url('^$', views.index),
    url('^users$', views.show),
    url(r'^new_user$', views.create)
]
