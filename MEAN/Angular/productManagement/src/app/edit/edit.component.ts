import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  products: Array<Product> = [];
  product: Product;

  constructor(private _productService: ProductService,
  private _route: ActivatedRoute,
  private _router: Router) { 

  this._productService.productsObservable.subscribe( (products) => {
    this.products = products;
  });

  this._route.params.subscribe( param => {
    // console.log(param.id);
    for (let i=0; i< this.products.length; i++){
      // console.log(this.products[i].id);
      if(this.products[i].id == param.id) {
        this.product = this.products[i];
        // console.log(this.product);
        break; //find first if multiple products share the same id
      }
    }
  })
}

update(){
  this._productService.updateProducts(this.products);
  this._router.navigate(['products']);
}

delete(){
  console.log(this.product);
  // this.products.splice(index, 1);
  // this._productService.updateProducts(this.products);
  // this._router.navigate(['products']);
}

  ngOnInit() {
  }

}
