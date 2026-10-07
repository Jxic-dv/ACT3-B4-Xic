import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule aquí también
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Teclado Mecánico', price: 85.50, description: 'Switches red, RGB' },
    { id: 2, name: 'Ratón Inalámbrico', price: 45.00, description: 'Sensor óptico 10000 DPI' },
    { id: 3, name: 'Monitor 24"', price: 150.00, description: '144Hz, Panel IPS' }
  ];

  constructor(private cartService: CartService) {}

  onAddToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}