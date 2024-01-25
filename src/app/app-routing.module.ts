import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthModule } from './userauth/userauth.module';
import { LoginComponent } from './userauth/login/login.component';
import { RegistrationComponent } from './userauth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AddproductformComponent } from './home/addproductform/addproductform.component';
import { ViewproductComponent } from './home/viewproduct/viewproduct.component';
import { WishlistComponent } from './home/wishlist/wishlist.component';
import { ProductdetailsComponent } from './home/productdetails/productdetails.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,

  },
  {
    path: "register",
    component: RegistrationComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    children:[{
      path: "addproductform",
      component: AddproductformComponent,
    },{
      path: "productdetails",
      component: ProductdetailsComponent,
    },
    {
      path: "viewproduct",
      component: ViewproductComponent,
      
    },
    {
      path: "wishlist",
      component: WishlistComponent,
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,UserauthModule]
})
export class AppRoutingModule { }
