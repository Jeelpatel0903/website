import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UserauthComponent } from './userauth.component';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UserauthComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports:[
    LoginComponent,
    RegistrationComponent,

  ]
})
export class UserauthModule { }
