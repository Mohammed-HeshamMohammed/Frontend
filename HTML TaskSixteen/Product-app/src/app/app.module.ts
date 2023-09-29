import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductCardModule } from './product-card/product-card.module'; // Import the ProductCardModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SliceDescriptionPipe } from './slice-description.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FavoriteProductComponent,
    ProductDetailsComponent,
    SliceDescriptionPipe,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductCardModule // Include ProductCardModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
