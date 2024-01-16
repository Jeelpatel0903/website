import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/datamodel/Product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private api:ProductService) { }

  wishlistdata : Product[] = []

  ngOnInit(): void {
    this.showishlistitem()
  }

  showishlistitem(){
    this.api.ViewProductservice().subscribe(res => {
      this.wishlistdata = res.filter(e => e.ProductWishlist === true)
      console.log("wishlisr",this.wishlistdata);
      
    })
  }

}
