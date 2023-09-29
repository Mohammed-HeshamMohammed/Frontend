import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: number[] = [];
  private cartSubject = new BehaviorSubject<number[]>([]);

  cartItems$ = this.cartSubject.asObservable();

  addToCart(productId: number) {
    this.cartItems.push(productId);
    this.cartSubject.next(this.cartItems);
  }

  getCartItems(): number[] {
    return this.cartItems;
  }
}
