import { Component, Input } from '@angular/core';

@Component({
  selector: 'e-commerce-layout-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) title = '';
}
