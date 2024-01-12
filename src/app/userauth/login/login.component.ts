import { Component, OnInit } from '@angular/core';
import { UserauthserviceService } from './../../services/userauthservice.service';
import { NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeComponent } from 'src/app/home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Useremail:string =''
  UserPassword:string=''
  check:any

  getdata:any=[]

  constructor(private api:UserauthserviceService ,private router: Router) { }

  ngOnInit(): void {
    
    NavbarComponent.myVal=false
    // this.check = new HomeComponent()
    // console.log(this.check.constructor.login);
    
    // if(this.check.constructor.login === true){
    //   this.router.navigate(['/home'])
    // }
    
  }




  LoginFunction(data:NgForm){   

    if(this.Useremail==="" && this.UserPassword === "")
{
  alert("Fill Data")
  return
}
    this.api.getuserdata().subscribe((res)=>{
      this.getdata=res
      console.log("getdata",this.getdata);
      const index=this.getdata.findIndex((ele:any)=> ele.Useremail===this.Useremail && ele.UserPassword===this.UserPassword)
      console.log("index",index);
      if(index!=-1){
        this.router.navigate(['/home'])
        Swal.fire({
          title: "Good job!",
          text: "Your Login Sucess",
          icon: "success"
        });
        
      }else{
        Swal.fire({
          title: "Login Faill!",
          text: "Invalid User And Password",
          icon: "error"
        });
      }
    // console.log("  dgfdg",this.getdata['Useremail']);
    // console.log(res.toString().includes(data.form.value.User));
    
    // console.log(data);
    // console.log(res);
    // console.log(this.Useremail);
    // console.log(this.UserPassword);
    
  
    })
    };
  
}
