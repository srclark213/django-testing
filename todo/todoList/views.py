from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.core import serializers

from .models import List

# Create your views here.
def index(request):
    return render(request, 'todoList/home.html')

def oneList(request, list_id):
    data = serializers.serialize('json', [List.objects.get(pk=list_id),])
    return HttpResponse(data, content_type="application/json")

def allLists(request):
    data = serializers.serialize('json', List.objects.all())
    return HttpResponse(data, content_type="application/json")