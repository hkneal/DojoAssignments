import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe( (products) => {
      this.products = products;
    });
  }

  delete(index: number){
    this.products.splice(index, 1);
    this._productService.updateProducts(this.products);
  }

}
