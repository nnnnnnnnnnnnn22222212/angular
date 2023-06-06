import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private readonly USERNAME_KEY = 'username';
  private readonly ID_KEY = 'id';
  private usernameSubject = new BehaviorSubject<string | null>(null);
  private idSubject = new BehaviorSubject<number | null>(null);
  public username$ = this.usernameSubject.asObservable();
  public id$ = this.idSubject.asObservable();
  private cartSubject = new BehaviorSubject<any[]>([]); // Combine cart and cartItems into one BehaviorSubject
  public cart$ = this.cartSubject.asObservable();
  
  constructor() {
    this.usernameSubject.next(this.getUserName());
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.setCart(JSON.parse(storedCartItems));
    }
  }
  
  cartUpdated: EventEmitter<any> = new EventEmitter<any>(); // Event emitter for cart updates

  addToCart(item: any): void {
    const currentCart = this.getCart() || [];
    currentCart.push(item);
    this.setCart(currentCart);
    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    this.cartUpdated.emit(); // Emit the cart update event
  }
  
  getUserName(): string | null {
    return localStorage.getItem(this.USERNAME_KEY);
  }

  getId(): number | null {
    const id = localStorage.getItem(this.ID_KEY);
    return id ? parseInt(id, 10) : null;
  }

  setId(id: number | null): void {
    if (id) {
      localStorage.setItem(this.ID_KEY, String(id));
    } else {
      localStorage.removeItem(this.ID_KEY);
    }
    this.idSubject.next(id);
  }
  
  setUserName(username: string | null): void {
    if (username) {
      localStorage.setItem(this.USERNAME_KEY, username);
    } else {
      localStorage.removeItem(this.USERNAME_KEY);
    }
    this.usernameSubject.next(username);
  }
  
  setCart(cart: any[]): void {
    this.cartSubject.next(cart);
    localStorage.setItem('cartItems', JSON.stringify(cart));
  }

  clearAll(): void {
    this.setCart([]);
    localStorage.removeItem('cartItems');
    localStorage.removeItem(this.USERNAME_KEY);
    localStorage.removeItem(this.ID_KEY);
    this.usernameSubject.next(null);
    this.idSubject.next(null);
    this.cartUpdated.emit(); // Emit the cart update event
  }

  getCart(): any[] | undefined {
    return this.cartSubject.getValue();
  }
}
