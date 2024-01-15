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
    return this.productapi.post(this.url, data);
  }

  ViewProductservice(){
    return this.productapi.get<Product []>(this.url);
  }
}
