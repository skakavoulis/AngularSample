import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStandalone2Component } from './route-standalone-2.component';

describe('RouteStandalone2Component', () => {
  let component: RouteStandalone2Component;
  let fixture: ComponentFixture<RouteStandalone2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteStandalone2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteStandalone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "route-standalone-2 works!" in a p', () => {
    const compiled = fixture.nativeElement;
    const p = compiled.querySelector('p');
    expect(p).toBeTruthy();
    expect(p.textContent).toContain('route-standalone-2 works!');
  });
});
