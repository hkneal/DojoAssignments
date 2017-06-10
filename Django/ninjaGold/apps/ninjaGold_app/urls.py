from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^process/farm', views.processFarm),
    url(r'^process/cave', views.processCave),
    url(r'^process/house', views.processHouse),
    url(r'^process/casino', views.processCasino)
]
