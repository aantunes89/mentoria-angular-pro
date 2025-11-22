import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormEmailComponent } from './auth-form-email.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthFormEmailComponent', () => {
  let component: AuthFormEmailComponent;
  let fixture: ComponentFixture<AuthFormEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormEmailComponent, NoopAnimationsModule],
      providers: [AuthFormComponent, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');

    expect(button.disabled).toEqual(true);

    component.control.setValue('user@email.com');

    fixture.detectChanges();

    expect(button.disabled).toEqual(false);
  });

  it('should display required error message', () => {
    component.control.markAsTouched();
    fixture.detectChanges();

    const matError: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="error-required"]'
    );

    expect(matError).toBeTruthy();
  });

  it('should display email error message', () => {
    const input: HTMLInputElement = fixture.nativeElement.querySelector('input');

    input.value = 'user';
    input.dispatchEvent(new Event('input'));
    component.control.markAsTouched();

    fixture.detectChanges();

    const matError: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="error-email"]'
    );

    expect(matError).toBeTruthy();
  });
});
