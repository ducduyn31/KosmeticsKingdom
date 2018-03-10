import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {RoutingModule} from "./routing/routing.module";
import { BrandComponent } from './brands/brand/brand.component';
import { BrandsComponent } from './brands/brands.component';
import { BusinessComponent } from './business/business.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    BrandComponent,
    BrandsComponent,
    BusinessComponent,
    CustomerSupportComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
