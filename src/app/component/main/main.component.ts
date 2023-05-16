import { Component } from '@angular/core';
import { Products } from '../../common/main';

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
  products: Products[] = [
    {
      id: '1',
      name: 'linh tinh',
      price: 200,
      description: '10%',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '2',
      name: 'fsasa',
      price: 300,
      description: '20%',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '3',
      name: 'dsad',
      price: 400,
      description: '30%',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '3',
      name: 'dsad',
      price: 400,
      description: '30%',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '3',
      name: 'dsad',
      price: 400,
      description: '30%',
      imgUrl:
        'https://picsum.photos/200/200',
    },
    {
      id: '3',
      name: 'dsad',
      price: 400,
      description: '30%',
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
