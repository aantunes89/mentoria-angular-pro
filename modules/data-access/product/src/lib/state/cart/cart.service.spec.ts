import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { MOCK_PRODUCTS } from '../../mocks/product.mock';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to cart', () => {
    service.addToCart(MOCK_PRODUCTS[0]);
    expect(service.quantity()).toEqual(1);
    service.addToCart(MOCK_PRODUCTS[1]);
    expect(service.quantity()).toEqual(2);
  });
});
