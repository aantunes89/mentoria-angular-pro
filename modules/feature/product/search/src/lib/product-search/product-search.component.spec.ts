import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductSearchComponent } from './product-search.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MOCK_PRODUCTS, ProductSearchService } from '@ecommerce/product-data-access';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ProductSearchComponent', () => {
  let component: ProductSearchComponent;
  let fixture: ComponentFixture<ProductSearchComponent>;
  let productSearchService: ProductSearchService;

  const PRODUCT_SERVICE_MOCK = {
    searchByName: () => of(MOCK_PRODUCTS),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchComponent, NoopAnimationsModule],
      providers: [
        {
          provide: ProductSearchService,
          useValue: PRODUCT_SERVICE_MOCK, // a injecao no productSearchService abaixo vai usar esse mock
        },
      ],
    }).compileComponents();

    productSearchService = TestBed.inject(ProductSearchService);
    fixture = TestBed.createComponent(ProductSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should debounce when input field is changed', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input = fixture.debugElement.query(By.css('[data-testid]')).nativeElement;

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    expect(productSearchService.searchByName).not.toHaveBeenCalled();

    tick(501);

    expect(productSearchService.searchByName).toHaveBeenCalledWith(input.value);
  }));
  it('should search multiple times', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input = fixture.debugElement.query(By.css('[data-testid]')).nativeElement;

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(501);

    input.value = 'notebook';
    input.dispatchEvent(new Event('input'));

    tick(501);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(2);
  }));

  it('should prevent identical submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input = fixture.debugElement.query(By.css('[data-testid]')).nativeElement;

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(501);

    input.value = 'tv';
    input.dispatchEvent(new Event('input'));

    tick(501);

    expect(productSearchService.searchByName).toHaveBeenCalledTimes(1);
  }));

  it('should prevent empty submissions', fakeAsync(() => {
    jest.spyOn(productSearchService, 'searchByName');
    const input = fixture.debugElement.query(By.css('[data-testid]')).nativeElement;

    input.value = '';
    input.dispatchEvent(new Event('input'));

    tick(501);

    expect(productSearchService.searchByName).not.toHaveBeenCalled();
  }));

  it('should return products observable correctly', fakeAsync(() => {
    // emite de forma imediata o valor mockado e nao passa realmente pelos operators
    component.products$.subscribe((products) => expect(products).toEqual(MOCK_PRODUCTS));
  }));
});
