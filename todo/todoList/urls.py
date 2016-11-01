from django.conf.urls import url
from . import views

app_name = 'todoList'

urlpatterns = [
    # /
    url(r'^$', views.index, name='index'),
    # /lists/
    url(r'^lists/$', views.todoLists, name='lists'),
    # /lists/{pk}
    url(r'^lists/(?P<list_id>[0-9]+)$', views.todoList, name='list'),
    # /lists/{pk}/items
    url(r'^lists/(?P<list_id>[0-9]+)/items$', views.todoListItems, name='listItems')
]