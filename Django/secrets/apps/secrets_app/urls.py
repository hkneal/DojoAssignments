from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.index),
    url(r'^secrets$', views.secrets, name='secrets_url'),
    url(r'^secrets/(?P<id>[0-9]*)$', views.goback),
    url(r'^secrets/(?P<id>[0-9]*)/$', views.popular),
    url(r'^secrets/(?P<id>[0-9]*)/post$', views.postSecret),
    url(r'^secrets/(?P<sid>[0-9]*)/(?P<uid>[0-9]*)/delete$', views.delete),
    url(r'^secrets/(?P<sid>[0-9]*)/(?P<uid>[0-9]*)/like$', views.like),
    url(r'^logout$', views.logout, name='logout')
]
