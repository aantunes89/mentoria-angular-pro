import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendedProductsService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly recommendedProductsService = inject(RecommendedProductsService);
  readonly router = inject(Router);

  readonly products$ = this.recommendedProductsService.getProducts();

  goToProduct(id: string) {
    this.router.navigateByUrl(`product/${id}`);
  }
}
