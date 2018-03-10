import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {IntroductionComponent} from "../introduction/introduction.component";
import {BrandsComponent} from "../brands/brands.component";
import {BusinessComponent} from "../business/business.component";
import {CustomerSupportComponent} from "../customer-support/customer-support.component";

@NgModule({
  imports: [
    RouterModule.forRoot(RoutingModule.appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
  static appRoutes: Route[] = [
    {path: '', component: IntroductionComponent, pathMatch: 'full'},
    {path: 'brands', component: BrandsComponent},
    {path: 'business', component: BusinessComponent},
    {path: 'support', component: CustomerSupportComponent}
  ];
}
