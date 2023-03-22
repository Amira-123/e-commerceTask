
import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from './../../interface/iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  allProduct:any
  @Input() data:any;


  ngOnInit(): void {
  this.allProduct=this.data;

  }

}
