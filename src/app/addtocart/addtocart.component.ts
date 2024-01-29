import { Component, OnInit } from '@angular/core';
import { Product } from '../datamodel/Product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  constructor(private api: ProductService, private router: Router) { }

  cartdata: Product[] =[]
  cartdataAmount: number[] = []
  count: number = 1
  total: number = 0;
  // baseAmount:number=0


  ngOnInit() {
    this.showcartdarta()

  }


  showcartdarta() {
    this.api.ViewProductservice().subscribe(res => {
      this.cartdata = res.filter(e => e.ProductAddtoCart === true)
      console.log("addd", this.cartdata);

      this.cartdata.forEach(e => {
        e.basePrice = e.ProductPrice
        

      })



    })



  }

  removeitem(data: Product) {
    if (data) {
      // data.ProductAddtoCart =  data.ProductAddtoCart
      this.api.addtocardservice(data).subscribe((res) => {
        console.log(data);
      })
      // this.router.navigate(['/home/viewproduct'])
      this.showcartdarta()
    }
  }

  calculateTotalPrice() {
    console.log("func call",);
    let tot=0
     this.cartdata.forEach(element => {
      // console.log(element.ProductQuntity);
      tot+=element.ProductQuntity*element.ProductPrice
    });
    this.total=tot

  }

  addqunt(data: Product) {


    data.ProductQuntity++;
    data.basePrice = data.ProductQuntity * data.ProductPrice

  


  }
  removequnt(data: Product) {
    if (data.ProductQuntity > 1)
      data.ProductQuntity--
    data.basePrice = data.ProductQuntity * data.ProductPrice
  }

    
    

  }





