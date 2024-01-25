import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private api:ProductService) { }
  countnumber:number = 0
  ngOnInit(): void {
    this.shownumberwish()
  }

  shownumberwish(){
     this.api.ViewProductservice().subscribe(res => {
    this.countnumber = res.filter(a=>a.ProductWishlist === true ).length;
    })
  }

}
