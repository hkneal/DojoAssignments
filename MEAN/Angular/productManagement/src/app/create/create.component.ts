import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: Product = new Product();
  products: Array<Product> = [];


  constructor(private _produceService: ProductService, private _router: Router) { 
    this._produceService.productsObservable.subscribe( (products) => {
      this.products = products;
    })
  }

  ngOnInit() {
  }

  onSubmit(product: Product){
    console.log('in submit');
    this.product.imageUrl = "./assets/images/" + this.product.imageUrl + ".jpg";
    this.products.push(this.product);
    this._produceService.updateProducts(this.products);
    this.product = new Product();
    console.log('Hit Submit', this.products);
    this._router.navigate(['/products']);
  }  
}
