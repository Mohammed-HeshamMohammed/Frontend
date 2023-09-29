import { Component, Input } from '@angular/core';
import { FavoriteService } from '../favorite.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private favoriteService: FavoriteService, private cartService: CartService) {}

  navigateToProductDetails(productId: number) {
    console.log('Navigate to product details for product ID:', productId);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product.id);
    console.log('Product added to cart:', product);
  }

  toggleFavorite(product: any) {
    if (this.isFavorite(product)) {
      this.favoriteService.removeFromFavorite(product.id);
    } else {
      this.favoriteService.addToFavorite(product.id);
    }
  }

  isFavorite(product: any): boolean {
    return this.favoriteService.isFavorite(product.id);
  }
}
