import { Product } from './../../datamodel/Product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/datamodel/UserModel';
import { ProductService } from 'src/app/services/product.service';

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
  
  constructor(private api:ProductService) { 
  }

  
  
  ngOnInit(): void {
    this.Showallproduct();
    
  }
  
  Showallproduct(){
    this.api.ViewProductservice().subscribe((res)=>{
      this.alldata = res;
      console.log(this.alldata);
      this.elefill = this.alldata.filter(a=>a.ProductCategory === "Electronics").length;
      this.clothfill = this.alldata.filter(a=>a.ProductCategory === "Clothing").length;
      this.homefill = this.alldata.filter(a=>a.ProductCategory === "Home").length;
    })
  }

  filterelectornic(value:string){
    if(value === "ALL")
    {
      this.filterdata = this.alldata
    }
    else
    {
      this.filterdata = this.alldata.filter(e => e.ProductCategory === value)
    }
    
  }


}
