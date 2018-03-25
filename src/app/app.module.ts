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
import { ContactComponent } from './brands/contact/contact.component';
import {FormsModule} from "@angular/forms";
import { BrandDetailComponent } from './brands/brand-detail/brand-detail.component';
import {ActivatedRoute} from "@angular/router";
import { KeepHtmlDetailPipe } from './pipes/keep-html-detail.pipe';
import { NoticeComponent } from './business/notice/notice.component';
import { NoticeTableComponent } from './business/notice/notice-table/notice-table.component';
import { NoticeDetailComponent } from './business/notice/notice-detail/notice-detail.component';
import { ProcessComponent } from './business/process/process.component';
import {ContactService} from "./brands/contact/contact.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    BrandComponent,
    BrandsComponent,
    BusinessComponent,
    CustomerSupportComponent,
    ContactComponent,
    BrandDetailComponent,
    KeepHtmlDetailPipe,
    NoticeComponent,
    NoticeTableComponent,
    NoticeDetailComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
