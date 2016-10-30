from django.conf.urls import url
from . import views

app_name = 'todoList'

urlpatterns = [
    # /lists/
    url(r'^$', views.index, name='index'),
]