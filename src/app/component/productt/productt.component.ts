import { Component } from '@angular/core';
import { Products } from '../../common/main';
import { producttt } from 'src/app/data/main';
@Component({
  selector: 'app-productt',
  templateUrl: './productt.component.html',
  styleUrls: ['./productt.component.css']
})
export class ProducttComponent {
  products = producttt
}
