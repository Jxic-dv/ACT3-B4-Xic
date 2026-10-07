import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtotal',
  standalone: true // Elimina esto si usas NgModules en lugar de Standalone Components
})
export class SubtotalPipe implements PipeTransform {
  transform(price: number, quantity: number): number {
    return price * quantity;
  }
}