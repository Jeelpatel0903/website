import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public static login=false
  constructor() {
    HomeComponent.login = true;
   }
   
  ngOnInit(): void {
    HomeComponent.login = true;
    
  }

  logoutfunction(){
    HomeComponent.login = false;
    this.ngOnInit()

  }
}
