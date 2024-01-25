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
    return this.productapi.post(this.url, data);
  }

  ViewProductservice(){
    return this.productapi.get<Product []>(this.url);
  }

  Addproductinwishlist(data:Product){
    const wishlistUrl = `${this.url}/${data.id}`;
    console.log("jkhsdk",wishlistUrl);
    
    return this.productapi.put(wishlistUrl,data)
  }

  viewprodetails(){
    return this.productapi.get<Product []>(this.url)
  }
}
