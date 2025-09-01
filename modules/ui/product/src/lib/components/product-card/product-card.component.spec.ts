import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { MOCK_PRODUCTS } from '@ecommerce/product-data-access';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = MOCK_PRODUCTS[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product info correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('mat-card');
    expect(card).toBeTruthy();
    expect(card.textContent).toContain(component.product.name);
    expect(card.textContent).toContain(component.product.price);
  });
});
