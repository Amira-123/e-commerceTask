import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductsRoutingModule } from './products-routing.module';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AllproductComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    ProductComponent,
    ProductDetailsComponent,
    AllproductComponent
  ]
})
export class ProductsModule { }
