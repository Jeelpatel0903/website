import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/datamodel/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(private api:ProductService , private router:Router) {
    
   }

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

  removewishlist(data:Product)
  {
    if(data)
    {
      data.ProductWishlist = !data.ProductWishlist
      this.api.Addproductinwishlist(data).subscribe((responce) => {
      })
    }
    this.router.navigate(['/home/viewproduct'])
    
  
  }

}
