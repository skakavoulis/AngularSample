import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStandaloneComponentComponent } from './route-standalone-component.component';

describe('RouteStandaloneComponentComponent', () => {
  let component: RouteStandaloneComponentComponent;
  let fixture: ComponentFixture<RouteStandaloneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteStandaloneComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteStandaloneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
