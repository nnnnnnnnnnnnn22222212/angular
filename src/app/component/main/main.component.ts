import { Component, OnInit } from '@angular/core';
import { Products } from '../../common/main';
import { producttt } from 'src/app/data/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  products = producttt;
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
    this.filterProducts();
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
    this.filteredProducts = this.products.filter(
      (product) => product.type === this.selectedOption
    );
  }
}
