import { Pipe, PipeTransform } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Pipe({
  name: 'cartTotal',
  standalone: true // Elimina esto si usas NgModules
})
export class CartTotalPipe implements PipeTransform {
  transform(items: CartItem[]): number {
    if (!items || items.length === 0) return 0;
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}