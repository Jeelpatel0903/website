import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserauthModule } from './userauth/userauth.module';
import { LoginComponent } from './userauth/login/login.component';
import { RegistrationComponent } from './userauth/registration/registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,

  },
  {
    path:"register",
    component:RegistrationComponent,
  },
  {
    path:"home",
    component:HomeComponent,
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,UserauthModule]
})
export class AppRoutingModule { }
