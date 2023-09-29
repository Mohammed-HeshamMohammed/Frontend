import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      { id: 1, name: 'Stylish Leather Shoes', description: 'High-quality leather shoes for any occasion.', price: 59.99, imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF' },
      { id: 2, name: 'Elegant Wristwatch', description: 'An elegant wristwatch to complete your look.', price: 79.99, imageUrl: 'https://via.placeholder.com/150/3498DB/FFFFFF' },
      { id: 3, name: 'Designer Sunglasses', description: 'Protect your eyes in style with these designer sunglasses.', price: 49.99, imageUrl: 'https://via.placeholder.com/150/2ECC71/FFFFFF' },
      { id: 4, name: 'Wireless Bluetooth Headphones', description: 'Enjoy your music wirelessly with these comfortable headphones.', price: 99.99, imageUrl: 'https://via.placeholder.com/150/9B59B6/FFFFFF' },
      { id: 5, name: 'Leather Wallet', description: 'A compact and stylish wallet to keep your essentials organized.', price: 29.99, imageUrl: 'https://via.placeholder.com/150/34495E/FFFFFF' },
      { id: 6, name: 'Classic White T-Shirt', description: 'A comfortable and versatile white t-shirt for everyday wear.', price: 19.99, imageUrl: 'https://via.placeholder.com/150/F39C12/FFFFFF' },
      { id: 7, name: 'Vintage Denim Jeans', description: 'Timeless denim jeans for a classic look.', price: 39.99, imageUrl: 'https://via.placeholder.com/150/8E44AD/FFFFFF' },
      { id: 8, name: 'Laptop Backpack', description: 'A spacious and stylish backpack to carry your laptop and essentials.', price: 45.99, imageUrl: 'https://via.placeholder.com/150/27AE60/FFFFFF' },
      { id: 9, name: 'Smartphone Stand', description: 'A convenient stand for your smartphone for easy viewing.', price: 12.99, imageUrl: 'https://via.placeholder.com/150/E74C3C/FFFFFF' },
      { id: 10, name: 'Wireless Mouse', description: 'A wireless mouse for efficient computer navigation.', price: 18.99, imageUrl: 'https://via.placeholder.com/150/2980B9/FFFFFF' },
      { id: 11, name: 'Leather Belt', description: 'A stylish leather belt to complete your outfit.', price: 24.99, imageUrl: 'https://via.placeholder.com/150/1ABC9C/FFFFFF' },
      { id: 12, name: 'Portable Power Bank', description: 'A portable power bank to keep your devices charged on the go.', price: 32.99, imageUrl: 'https://via.placeholder.com/150/16A085/FFFFFF' },
      // Add more products as needed
    ];
  }
}
