import { Route } from "@angular/router";

export const APP_ROUTES: Route[] = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home",
  },
  {
    path: "home",
    loadChildren: () => import("@ecommerce/home").then((c) => c.HOME_ROUTES),
  },
  {
    path: "product",
    loadChildren: () => import("@ecommerce/product-detail").then((c) => c.PRODUCT_DETAIL_ROUTES),
  },
];
