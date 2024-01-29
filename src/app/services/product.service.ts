import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../datamodel/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productapi: HttpClient) {}

  url = "http://localhost:3000/Products";

  Addproductdataservice(data: Product) {
    // var d = new Date().toLocaleString(); for adding time in whene data is add 
    // data.ProductAddDate = d;
      data.ProductWishlist = false;
      data.ProductAddtoCart = false;
      data.ProductQuntity = 1
    return this.productapi.post(this.url, data);
  }

  ViewProductservice(){
    return this.productapi.get<Product []>(this.url);
  }

  Addproductinwishlist(data:Product){
    const wishlistUrl = `${this.url}/${data.id}`;
    // console.log("jkhsdk",wishlistUrl);
    
    return this.productapi.put(wishlistUrl,data)
  }

  viewprodetails(id:number){
    const viewproduct = `${this.url}/${id}`
    console.log(viewproduct);
    
    return this.productapi.get<Product>(viewproduct)
    
  }
  
  addtocardservice(data:Product){
    data.ProductAddtoCart = !data.ProductAddtoCart
    console.log(data.ProductAddtoCart);
    
    const addUrl = `${this.url}/${data.id}`;
    return this.productapi.put(addUrl,data)
  }
}
