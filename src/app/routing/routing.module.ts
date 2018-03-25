import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {IntroductionComponent} from "../introduction/introduction.component";
import {BrandsComponent} from "../brands/brands.component";
import {BusinessComponent} from "../business/business.component";
import {CustomerSupportComponent} from "../customer-support/customer-support.component";
import {BrandDetailComponent} from "../brands/brand-detail/brand-detail.component";

@NgModule({
  imports: [
    RouterModule.forRoot(RoutingModule.appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
  static appRoutes: Route[] = [
    {path: '', component: IntroductionComponent, pathMatch: 'full'},
    {path: 'brands', component: BrandsComponent, pathMatch: 'full'},
    {path: 'brands/:brand', component: BrandDetailComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'support', component: CustomerSupportComponent}
  ];
}
