import { Component } from '@angular/core';
import { Products } from 'src/app/common/main';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  status: boolean = false;
  productsName = '';
  product!: Products[];
  getValue(e: any) {
    this.productsName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
}
