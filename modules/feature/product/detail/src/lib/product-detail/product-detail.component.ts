import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';

import { CartService, Product, ProductSearchService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';

import { ROUTE_ID, ROUTE_ID_PROVIDERS } from './get-params';
import { QuantityDescriptionPipe } from '../pipes';

@Component({
  selector: 'e-commerce-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe, MatButtonModule],
  providers: [ROUTE_ID_PROVIDERS],
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);
  cartService = inject(CartService);

  readonly product$: Observable<Product> = inject(ROUTE_ID).pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
