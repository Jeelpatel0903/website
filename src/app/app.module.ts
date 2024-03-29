import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserauthModule } from './userauth/userauth.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddproductformComponent } from './home/addproductform/addproductform.component';
import { ViewproductComponent } from './home/viewproduct/viewproduct.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './home/wishlist/wishlist.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';
import { AddtocartComponent } from './addtocart/addtocart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AddproductformComponent,
    ViewproductComponent,
    WishlistComponent,
    ProductdetailsComponent,
    AddtocartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserauthModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
