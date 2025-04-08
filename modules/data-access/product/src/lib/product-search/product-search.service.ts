import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly API_URL = 'https://65009f9718c34dee0cd53786.mockapi.io';

  private readonly http: HttpClient = inject(HttpClient);

  searchByName(name: string) {
    return this.http.get<Product[]>(`${this.API_URL}/products`, {
      params: { name },
    });
  }
}
