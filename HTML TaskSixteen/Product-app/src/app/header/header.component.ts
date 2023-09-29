import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FavoriteService } from '../favorite.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItemCount = 0;
  favoriteItemCount = 0;
  cartViewVisible = false;
  favoriteViewVisible = false;

  constructor(private cartService: CartService, private favoriteService: FavoriteService) { }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItemCount = items.length;
    });

    this.favoriteService.favoriteItems$.subscribe(items => {
      this.favoriteItemCount = items.length;
    });
  }

  toggleCartView() {
    this.cartViewVisible = !this.cartViewVisible;
    this.favoriteViewVisible = false; // Close favorite view when cart view is toggled
  }

  toggleFavoriteView() {
    this.favoriteViewVisible = !this.favoriteViewVisible;
    this.cartViewVisible = false; // Close cart view when favorite view is toggled
  }
}
