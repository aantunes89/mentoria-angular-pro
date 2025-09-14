import { InjectionToken, Provider } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, map } from 'rxjs';

export const ROUTE_ID = new InjectionToken<Observable<string>>(
  'Returns an observable in the route id being passed as a parameter'
);

export function routeIdFactory(route: ActivatedRoute): Observable<string | null> {
  return route.paramMap.pipe(map((params) => params.get('id')));
}

export const ROUTE_ID_PROVIDERS: Provider[] = [
  {
    provide: ROUTE_ID,
    deps: [ActivatedRoute],
    useFactory: routeIdFactory,
  },
];
