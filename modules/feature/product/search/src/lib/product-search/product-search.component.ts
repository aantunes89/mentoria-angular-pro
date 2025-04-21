import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MOCK_PRODUCTS } from '@ecommerce/product-data-access';

const PRDUCT_SEARCH_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
];

@Component({
  selector: 'e-commerce-product-search',
  standalone: true,
  imports: [...PRDUCT_SEARCH_MODULES],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent {
  control = new FormControl('');
  products = MOCK_PRODUCTS;
}
