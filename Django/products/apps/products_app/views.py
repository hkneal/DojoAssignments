from django.shortcuts import render
from .models import Product

# Create your views here.
def index(request):
    Product.objects.create(name="Iphone", description="Overpriced smartphone that milks the consumers yearly by adding 1 essential function and jacking up the price!", weight="34", price="799", cost="150", category="Smartphone")
    Product.objects.create(name="Iphone7", description="Overpriced smartphone that milks the consumers yearly by adding 1 essential function and jacking up the price!", weight="24", price="799", cost="150", category="Smartphone")
    Product.objects.create(name="Iphone8", description="Overpriced smartphone that milks the consumers yearly by adding 1 essential function and jacking up the price!", weight="14", price="799", cost="150", category="Smartphone")
    product = Product.objects.all()
    for product in product:
        print product.name
    return render(request, 'products_app/index.html')
