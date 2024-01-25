import { Product } from './../../datamodel/Product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/datamodel/UserModel';
import { ProductService } from 'src/app/services/product.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  alldata:Product[]=[]
  filterdata:Product[]=[]
  elefill:number= 0
  clothfill:number = 0
  homefill :number = 0
  allfill :number = 0
  wishbtn :string = "Add Wishlist"
  
  constructor(private api:ProductService,private router: Router) { 
  }

  
  
  ngOnInit(): void {
    this.Showallproduct();
    
  }

  addwishlist(data:Product){
    if(data)
    {
      data.ProductWishlist = !data.ProductWishlist
      this.api.Addproductinwishlist(data).subscribe((responce) => {
      })
    }
    this.router.navigate(['/wishlist'])
    
  
  }
 
  
  Showallproduct(){
    this.api.ViewProductservice().subscribe((res)=>{
      this.alldata = res;
      console.log(this.alldata);
      this.allfill = this.alldata.length
      this.elefill = this.alldata.filter(a=>a.ProductCategory === "Electronics").length;
      this.clothfill = this.alldata.filter(a=>a.ProductCategory === "Clothing").length;
      this.homefill = this.alldata.filter(a=>a.ProductCategory === "Home").length;
    })
  }

  filterelectornic(value:string){
    this.api.ViewProductservice().subscribe((res)=>{
      if(value === "ALL"){
        this.alldata = res
        return;
      }
      this.alldata = res 
      this.alldata = this.alldata.filter(e => e.ProductCategory === value)
        console.log(this.filterdata)
    })


   
  }


}
