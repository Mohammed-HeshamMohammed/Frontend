import { Component } from '@angular/core';
import { FavoriteProductService } from './favorite-product.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css'],
  providers: [FavoriteProductService] // Add this line
})
export class FavoriteProductComponent {
  favoriteProducts: any[] = [];

  constructor(private favoriteProductService: FavoriteProductService) {
    this.favoriteProducts = this.favoriteProductService.getFavoriteProducts();
  }
}
