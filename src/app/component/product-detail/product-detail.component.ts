import { Component, Input } from '@angular/core';
import { Products } from 'src/app/common/main';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  @Input('data') product!: Products;
}
