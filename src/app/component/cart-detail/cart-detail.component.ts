import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css'],
})
export class CartDetailComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.cartItems = this.sharedService.getCart() || [];
    this.calculateTotalPrice();
  }
  getTotalQuantity(): number {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  }
  calculateTotalPrice(): void {
    this.totalPrice = 0;
    for (const item of this.cartItems) {
      this.totalPrice += item.price * item.quantity;
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.sharedService.setCart(this.cartItems);
    this.calculateTotalPrice();
  }
}
