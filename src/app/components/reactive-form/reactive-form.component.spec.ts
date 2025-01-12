import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the form', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should display the first name input', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('input[formControlName="firstName"]')
    ).toBeTruthy();
  });

  it('should display the last name input', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('input[formControlName="lastName"]')
    ).toBeTruthy();
  });

  it('should display the more than 2 years experience checkbox', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector(
        'input[formControlName="moreThanTwoYearsExperience"]'
      )
    ).toBeTruthy();
  });

  it('should display the years of experience input', () => {
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector('input[formControlName="yearsOfExperience"]')
    ).toBeFalsy();
  });

  it('should submit the form', () => {
    spyOn(component, 'onSubmit');

    const compiled = fixture.nativeElement;
    const form = compiled.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('form should be invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form should be valid when all required fields are filled', () => {
    component.form.patchValue({
      firstName: 'code John',
      lastName: 'Doe',
      preferredLanguage: 'csharp',
      favoriteLanguage: 'typescript',
      skills: [{ name: 'skill1', yearsExperience: 10 }],
    });
    expect(component.form.valid).toBeTruthy();
  });
});
