import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.cartItems = this.sharedService.getCart() || [];
    console.log(this.cartItems)
  }
  

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.sharedService.setCart(this.cartItems);
    console.log(this.cartItems)
  }
}
