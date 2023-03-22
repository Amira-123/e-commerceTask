import { Iproduct } from './../../interface/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  id:number=this.route.snapshot.params['id'];
  constructor(
    private service:ProductService,
    private route:ActivatedRoute){}
  product:Iproduct={}
  ngOnInit(): void {
   this.getProductDetails()
  }
  getProductDetails(){
   this.service.getSingleProduct(this.id).subscribe({
      next:(res:any)=>{
       this.product=res;
       console.log(this.product)
    }
   })

  }
}
