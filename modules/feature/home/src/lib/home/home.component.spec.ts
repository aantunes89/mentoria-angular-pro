import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { MOCK_PRODUCTS, RecommendedProductsService } from '@ecommerce/product-data-access';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],

      // Componente não tem que saber de chamadas HTTP reais,
      // então mockamos o serviço em providers usando a (inversão de dependencia)

      providers: [
        {
          provide: RecommendedProductsService,
          useValue: {
            getProducts: () => of(MOCK_PRODUCTS),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('should render product cards correctly', () => {
    const cards = fixture.nativeElement.querySelectorAll('e-commerce-product-card');
    expect(cards.length).toBe(MOCK_PRODUCTS.length);
  });
});
