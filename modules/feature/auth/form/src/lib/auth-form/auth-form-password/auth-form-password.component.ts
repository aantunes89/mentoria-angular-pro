import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@ecommerce/auth-data-access';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'lib-auth-form-password',
  standalone: true,
  imports: [MatInputModule, CommonModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  emailValue = inject(AuthFormComponent).form.controls.email.value;
  control = inject(AuthFormComponent).form.controls.password;

  authService = inject(AuthService);
  router = inject(Router);

  login(): void {
    this.authService.setEmail(this.emailValue);

    this.router.navigate(['/']);
  }
}
