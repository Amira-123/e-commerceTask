import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProduct(){
    return this.http.get(environment.baseApi+'products')
  }
  getSingleProduct(id:number){
    return this.http.get(environment.baseApi+'products/'+id)
  }
}
