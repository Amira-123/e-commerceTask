import { Component, OnInit } from '@angular/core';
import { Iproduct } from './../../interface/iproduct';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.scss'],
})
export class AllproductComponent implements OnInit {
  constructor(private service: ProductService) {}
  allProducts: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts() {
    this.service.getAllProduct().subscribe({
      next: (res: any) => {
        this.allProducts = res.products;
        this.filteredProducts = res.products;
      },
      error: (error: any) => {
        alert(error);
      },
    });
  }

  searchproduct(val: any) {
    let newArray = this.allProducts.filter((el: any) =>
      el.title.toLowerCase().includes(val.toLowerCase())
    );
    if (val) {
      this.filteredProducts = newArray;
    } else {
      this.filteredProducts = this.allProducts;
    }
  }
}
