import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        paramMap: new Map(),
      },
    });

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "You are not logged in" when the user is not logged in', () => {
    spyOn(component.authService, 'isLoggedIn').and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('You are not logged in');
  });

  it('should display "You are logged in" when the user is logged in', () => {
    spyOn(component.authService, 'isLoggedIn').and.returnValue(true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('You are logged in');
  });

  it('should display "You are logged in" when the "login" button is pressed', () => {
    spyOn(component.authService, 'login').and.callFake(() => {
      component.authService.isLoggedIn = () => true;
    });
    const compiled = fixture.nativeElement;
    const loginButton = compiled.querySelector('button');
    loginButton.click();
    fixture.detectChanges();
    expect(compiled.textContent).toContain('You are logged in');
  });
});
