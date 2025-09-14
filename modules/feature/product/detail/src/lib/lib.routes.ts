import { Route } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const PRODUCT_DETAIL_ROUTES: Route[] = [{ path: ':id', component: ProductDetailComponent }];
