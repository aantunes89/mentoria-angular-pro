import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { ProductSearchComponent } from '@ecommerce/product-search';

import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, ProductSearchComponent, MatSnackBarModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
