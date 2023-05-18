import { Component } from '@angular/core';
import { Products } from '../../common/main';
@Component({
  selector: 'app-productt',
  templateUrl: './productt.component.html',
  styleUrls: ['./productt.component.css']
})
export class ProducttComponent {
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
}
