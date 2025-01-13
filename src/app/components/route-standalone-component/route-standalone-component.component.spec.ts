import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStandaloneComponentComponent } from './route-standalone-component.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('RouteStandaloneComponentComponent', () => {
  let component: RouteStandaloneComponentComponent;
  let fixture: ComponentFixture<RouteStandaloneComponentComponent>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: {
        params: { id: '123' },
      },
      params: of({ id: '123' }),
    });

    await TestBed.configureTestingModule({
      imports: [RouteStandaloneComponentComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(RouteStandaloneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the id', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'This is your id: 123'
    );
  });
});
