import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { ROUTE_ID, ROUTE_ID_PROVIDERS } from './get-params';

import { Product, ProductSearchService } from '@ecommerce/product-data-access';

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [ROUTE_ID_PROVIDERS],
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  readonly product$: Observable<Product> = inject(ROUTE_ID).pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
