import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';

import { httpErrorsInterceptor } from './http-errors.interceptor';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('httpErrorsInterceptor', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([httpErrorsInterceptor])),
        provideHttpClientTesting(),
      ],
    });

    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should open notification on http error', () => {
    // spy no snackbar para ver metodos chamados
    jest.spyOn(snackBar, 'open');
    // faz a chamada mock http
    httpClient.get('/test').subscribe();

    // expect do mock http call
    const request = httpMock.expectOne('/test');

    // seta/mocka um erro na requisiçao (objeto retornado pela mock call)
    request.error(new ProgressEvent('error'));

    // verifica o spy
    expect(snackBar.open).toHaveBeenCalled();

    // verifica se o token existe => isto poderia ter o proprio teste e nao tem tanto sentido neste "it"
    expect(request.request.headers.has('x-access-token')).toBe(true);
  });
});
