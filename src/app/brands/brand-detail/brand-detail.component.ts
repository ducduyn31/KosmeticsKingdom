import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {ProductService} from "../product.service";
import {Subscription} from "rxjs/Subscription";
import {Product} from "../product";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BrandDetailComponent implements OnInit, OnDestroy {

  private productSub: Subscription;
  product: Product;

  constructor(private productService: ProductService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.productSub = this.productService.getProductByName(this._route.snapshot.params['brand']).subscribe(
      (product: Product) => {
        this.product = product;
      }
    )
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }
}
