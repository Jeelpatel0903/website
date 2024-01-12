import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/home/home.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  val:any
  public static myVal:any
  ngOnInit(): void {

    this.val = new HomeComponent
    NavbarComponent.myVal=this.val.HomeComponent.constructor.login
    

  }

}
