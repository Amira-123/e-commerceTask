import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AllproductComponent } from './components/allproduct/allproduct.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:AllproductComponent},
  {path:'product-details/:id',component:ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
