import { Component, OnInit } from '@angular/core';
import { Products } from '../../common/main';
import { ProductService } from 'src/app/serviceproduct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  products!: any[];
  constructor(private productService: ProductService, private router: Router) {}
  getProducts() {
    this.productService.getProducts().subscribe(
      (response: any) => {
        this.products = response.data;
        console.log([...response.data]);
        this.filterProducts();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  productName = '';
  status: boolean = false;
  product!: Products;
  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  selectedProduct: any;

  onSelectProduct(product: any) {
    this.selectedProduct = product;
  }
  selectedOption: string = 'women';
  ngOnInit(): void {
    this.getProducts();
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }

  filteredProducts: any[] = [];

  selectOption1(option: string): void {
    this.selectedOption = option;
    this.filterProducts();
  }

  filterProducts(): void {
    if (this.products) {
      this.filteredProducts = this.products.filter(
        (product: { type: string }) => product.type === this.selectedOption
      );
      console.log(this.products);
    }
  }
}
