import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

const mockTitle = 'Mock Title';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cointain a title', () => {
    const header: HTMLHeadElement = fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe(mockTitle);

    component.title = 'another title';

    fixture.detectChanges();
    expect(header.textContent).toBe('another title');
  });

  it('should redirect to "/" when logo is is clicked', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    // captura no DOM o elemento <a> e verifica se o href é igual a "/"
    // comparamos o href pq o browser não entende o routerLink apenas o href
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
