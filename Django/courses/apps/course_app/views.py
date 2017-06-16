from django.shortcuts import render, redirect
from .models import Course, Description, Comment
# Create your views here.
def index(req):
    courses = Course.objects.all()
    context = {
        'courses' : courses
    }
    return render(req, 'course_app/index.html', context)

def add_course(req):
    description = Description.objects.create(
        description = req.POST['description']
    )
    Course.objects.create(
        course_name = req.POST['course_name'],
        description = description
    )
    return redirect('/')

def comment_page(req, id):
    course = Course.objects.get(id=id)
    context = { 'course' : course}
    return render(req, 'course_app/comment_page.html', context)

# def comment(req, id):
#     course = Course.objects.get(id=id)
#     context = { 'course' : course}
#     return render(req, 'course_app/comment.html', context)

def add_comment(req, id):
    course = Course.objects.get(id=id)
    Comment.objects.create(
        comment = req.POST['comment'],
        course = course
    )
    context = {
        'course' : course
    }
    return render(req, 'course_app/comment_page.html', context)

def remove(req, id):
    course = Course.objects.get(id=id)
    context = { 'course' : course}
    return render(req, 'course_app/remove.html', context)

def remove_course(req, id):
    Course.objects.filter(id=id).delete()
    return redirect('/')
