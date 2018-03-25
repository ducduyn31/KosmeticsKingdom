import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductService} from "./product.service";
import {Product} from "./product";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit, OnDestroy {

  private products: Subscription;

  productsList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts().subscribe(
      (product: Product) => {
        this.productsList.push(product);
      }
    );
  }

  ngOnDestroy(): void {
    this.products.unsubscribe();
  }
}
