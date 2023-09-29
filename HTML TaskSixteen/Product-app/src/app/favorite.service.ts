import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favoriteProductIds: number[] = [];
  private favoriteItemsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  // Observable to track favorite items
  favoriteItems$: Observable<number[]> = this.favoriteItemsSubject.asObservable();

  addToFavorite(productId: number) {
    if (!this.isFavorite(productId)) {
      this.favoriteProductIds.push(productId);
      this.favoriteItemsSubject.next(this.favoriteProductIds);
    }
  }

  removeFromFavorite(productId: number) {
    const index = this.favoriteProductIds.indexOf(productId);
    if (index !== -1) {
      this.favoriteProductIds.splice(index, 1);
      this.favoriteItemsSubject.next(this.favoriteProductIds);
    }
  }

  isFavorite(productId: number): boolean {
    return this.favoriteProductIds.includes(productId);
  }
}
