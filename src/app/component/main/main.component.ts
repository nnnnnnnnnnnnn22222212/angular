import { Component } from '@angular/core';
import { Products } from '../../common/main';
import { producttt } from 'src/app/data/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  video = [
    {
      video: "https://youtu.be/8-MFg_0wY4U"
    }
  ]
 products = producttt
  productName= "";
  status: boolean = false;
  product!: Products;
  getValue(e: any){
    this.productName = e.target.value;
  } 
  changeStatus() {
    this.status = !this.status;
  }
  selectedProduct: any;

  onSelectProduct(product: any) {
    this.selectedProduct = product;
  }
}
