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
  prodata:Product[] = []
  showdata:Product[] = []
  imgurl:string | null = null
  index:number = 0

  ngOnInit(): void {
    this.activ.queryParamMap.subscribe((e)=>{
     this.getid = Number(e.get('id'))
     console.log(this.getid);
    })
    this.proservice.ViewProductservice().subscribe((data)=>{
      this.prodata = data
      this.index = this.prodata.findIndex((i)=>{
        return this.getid === i.id 
      })
      
  })
  


}
}
