import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withPreloading,
} from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { httpErrorsInterceptor } from './interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES, withPreloading(NoPreloading), withComponentInputBinding()),
    provideHttpClient(withInterceptors([httpErrorsInterceptor])),
    provideAnimationsAsync(),
  ],
};
