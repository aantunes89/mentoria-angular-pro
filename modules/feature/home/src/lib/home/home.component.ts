import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { MOCK_PRODUCTS } from '@ecommerce/product-data-access';
@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public products = MOCK_PRODUCTS;
}
