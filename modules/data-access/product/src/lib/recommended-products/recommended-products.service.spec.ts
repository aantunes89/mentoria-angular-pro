import { TestBed } from '@angular/core/testing';

import { RecommendedProductsService } from './recommended-products.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Product } from '../models/product.model';
import { MOCK_PRODUCTS } from '../mocks/product.mock';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(RecommendedProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return recommended products correctly', () => {
    // Arrange
    const url = `${service.API_URL}/products?page=1&limit=6`;
    let result: Product[] = [];

    // Act
    service.getProducts().subscribe((products) => (result = products));

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(MOCK_PRODUCTS);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(MOCK_PRODUCTS);
  });
});
