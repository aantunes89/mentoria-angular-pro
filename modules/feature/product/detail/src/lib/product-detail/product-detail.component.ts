import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ROUTE_ID, ROUTE_ID_PROVIDERS } from './get-params';

@Component({
  selector: 'lib-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [ROUTE_ID_PROVIDERS],
})
export class ProductDetailComponent {
  readonly id$: Observable<string | null> = inject(ROUTE_ID);
}
