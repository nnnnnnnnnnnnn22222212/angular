import { Component } from '@angular/core';
import { Products } from '../../common/main';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  products: Products[] = [
    {
      id: '1',
      name: 'linh tinh',
      price: 200,
      description: 'Mo ta',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '2',
      name: 'fsasa',
      price: 300,
      description: 'Mo ta cho san pham',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '3',
      name: 'dsad',
      price: 400,
      description: 'Mo ta cho san pham',
      imgUrl:
        'https://picsum.photos/200/200',
    },
  ];
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
