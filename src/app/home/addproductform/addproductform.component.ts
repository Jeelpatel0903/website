import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/datamodel/Product';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addproductform',
  templateUrl: './addproductform.component.html',
  styleUrls: ['./addproductform.component.css']
})
export class AddproductformComponent implements OnInit {

  constructor(private api: ProductService) { }

  ngOnInit(): void {
  }

  AddProductFunction(data:Product){
    if(data.ProductName === "" || data.ProductImage === "" || data.ProductPrice === null || data.ProductCategory === ""){
      Swal.fire({
        title: "Product Not Add",
        text: "Please Fill All Fild",
        icon: "error"
      })
      return
    }
    this.api.Addproductdataservice(data).subscribe((result) => {
      Swal.fire({
        title: "Done",
        text: "Your Product Added Successfully",
        icon: "success"
      });
    })


  }

}
