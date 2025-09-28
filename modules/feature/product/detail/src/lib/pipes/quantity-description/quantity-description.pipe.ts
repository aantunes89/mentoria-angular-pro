import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
  standalone: true,
})
export class QuantityDescriptionPipe implements PipeTransform {
  transform(quantity: number): string {
    if (quantity === 0) return 'Product is unavailable';

    if (quantity === 1) return 'Last in stock!';

    return `${quantity} items available`;
  }
}
