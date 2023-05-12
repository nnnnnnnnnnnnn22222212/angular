import { Component } from '@angular/core';
import { productss } from 'src/app/common/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: productss[] = [
    {_id: 1,name: 'Sơn', price: 111, img: "https://picsum.photos/200/200"},
    {_id: 2,name: 'Hoàng', price: 1112, img: "https://picsum.photos/200/200"},
    {_id:3, name: 'Linh', price: 1131, img: "https://picsum.photos/200/200"},
    {_id:4, name: 'Kiên', price: 38743, img: "https://picsum.photos/200/200"},
  ] 
  status: boolean = false
  productsName = "";
  product!: productss[];
  getValue(e: any) {
    this.productsName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    this.products = this.products.filter(item=> item._id !== id)
  }
}
