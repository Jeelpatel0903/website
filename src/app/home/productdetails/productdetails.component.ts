import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/datamodel/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor(private activ:ActivatedRoute,private proservice:ProductService) { }

  getid:number | null = null
  prodata:Product | null = null
  showdata:Product[] = []
  imgurl:string | null = null
  productname:string | null = null
  category:string | null = null
  productprice:number | null = null
  index:number = 0

  ngOnInit(): void {
    this.activ.queryParamMap.subscribe((e)=>{
     this.getid = Number(e.get('id'))
    })
    this.proservice.viewprodetails(this.getid!).subscribe((data)=>{
      this.prodata = data
      this.productname = this.prodata.ProductName
      this.category = this.prodata.ProductCategory
      this.productprice = this.prodata.ProductPrice
      this.imgurl = this.prodata.ProductImage
    })
}

addtocard(){
  this.proservice.addtocardservice(this.prodata!).subscribe((s)=>
  alert("addto crad")
  )
}
}
