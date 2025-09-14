import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ProductSearchService } from '@ecommerce/product-data-access';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  EMPTY,
  filter,
  Observable,
  switchMap,
} from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
import { RouterModule } from '@angular/router';

function isBlank(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    value === '' ||
    (typeof value === 'number' && isNaN(value))
  );
}

const PRDUCT_SEARCH_MODULES = [
  CommonModule,
  RouterModule,
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
export class ProductSearchComponent implements OnInit {
  control = new FormControl<string>('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      filter((term) => !isBlank(term)),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((term: string) =>
        this.productSearchService.searchByName(term).pipe(catchError(() => EMPTY))
      )
    );
  }
}
