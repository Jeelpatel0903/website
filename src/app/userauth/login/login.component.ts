import { User } from '../../datamodel/UserModel';
import { Component, OnInit } from '@angular/core';
import { UserauthserviceService } from './../../services/userauthservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  Useremail:string =''
  UserPassword:string=''
  check:any

  getdata:User[] = []

  constructor(private api:UserauthserviceService ,private router: Router) { }

  LoginFunction(data:NgForm){

    if(this.Useremail==="" && this.UserPassword === "")
{
  alert("Fill Data")
  return
}
this.api.getuserdata().subscribe((res) => {
  this.getdata = res; // Assign the array of objects to getdata

  console.log("getdata", this.getdata);

  const index = this.getdata.findIndex((ele:User) => ele.Useremail === this.Useremail && ele.UserPassword === this.UserPassword);

  console.log("index", index);

  if (index !== -1) {
    this.router.navigate(['/home']);
    Swal.fire({
      title: "Good job!",
      text: "Your Login Success",
      icon: "success"
    });
  } else {
    Swal.fire({
      title: "Login Fail!",
      text: "Invalid User And Password",
      icon: "error"
    });
  }
});

    // console.log("  dgfdg",this.getdata['Useremail']);
    // console.log(res.toString().includes(data.form.value.User));

    // console.log(data);
    // console.log(res);
    // console.log(this.Useremail);
    // console.log(this.UserPassword);

  }
}
