// src/app/favorite-product/favorite-product.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteProductService {
  private favoriteProducts: any[] = [];

  addFavoriteProduct(product: any) {
    this.favoriteProducts.push(product);
  }

  getFavoriteProducts() {
    return this.favoriteProducts;
  }
}
