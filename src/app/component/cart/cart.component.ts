import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItemsNumber: any;
  cartItems: any[] = [];
  f1quantity: number = 0;
  constructor(
    public sharedService: SharedService,
    private userService: UserService
  ) {
    this.updateCartItems(); // Initial update of cart items

    // Subscribe to the cart update event
    this.sharedService.cartUpdated.subscribe(() => {
      this.updateCartItems();
    });
  }
  updateCartItems(): void {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
  }
  getTotalQuantity(): number {
    let totalQuantity = 0;
    for (const item of this.cartItems) {
      console.log(item);
      totalQuantity += item.quantity;
    }
    console.log(totalQuantity);
    return totalQuantity;
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.sharedService.cartUpdated.emit(); // Emit the cart update event
  }
  ngOnInit() {
    this.cartItems = this.sharedService.getCart() || [];
    console.log(this.cartItems);

    this.cartItems.forEach((items) => {
      this.f1quantity += items.quantity;
    });
    console.log(this.f1quantity);
    const userId = this.sharedService.getId();
    if (userId !== null) {
      this.userService.getCart(userId).subscribe(
        (cartItems) => {
          this.cartItemsNumber = 0;
          console.log(cartItems);
          cartItems.cart.forEach((item: any) => {
            console.log(item.quantity);
            this.cartItemsNumber += item.quantity;
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log('User ID is null. Unable to retrieve cart items.');
    }
    console.log(this.sharedService.getId());
  }
}
