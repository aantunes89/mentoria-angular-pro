import { Route } from '@angular/router';
import { authGuard } from '@ecommerce/auth-data-access';
import { AuthFormComponent } from './auth-form/auth-form.component';

export const AUTH_FORM_ROUTES: Route[] = [
  {
    path: '',
    component: AuthFormComponent,
    canActivate: [authGuard()],
    children: [
      {
        path: 'email',
        loadComponent: () =>
          import('./auth-form/auth-form-email').then((c) => c.AuthFormEmailComponent),
      },
      {
        path: 'password',
        loadComponent: () =>
          import('./auth-form/auth-form-password').then((c) => c.AuthFormPasswordComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'email',
      },
      {
        path: '**',
        redirectTo: 'email',
      },
    ],
  },
];
