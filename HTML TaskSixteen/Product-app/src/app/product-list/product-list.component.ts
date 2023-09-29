import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductService]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  navigateToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }

  addToCart(product: any) {
    // Implement add to cart functionality
  }
}
