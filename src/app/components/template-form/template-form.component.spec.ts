import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormComponent } from './template-form.component';

describe('TemplateFormComponent', () => {
  let component: TemplateFormComponent;
  let fixture: ComponentFixture<TemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateFormComponent);
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

  it('should submit the form', () => {
    spyOn(console, 'log');
    const form = fixture.nativeElement.querySelector('form');
    const firstNameInput = form.querySelector('input[name="firstName"]');
    const lastNameInput = form.querySelector('input[name="lastName"]');
    const moreThanTwoYearsExperienceInput = form.querySelector(
      'input[name="moreThanTwoYearsExperience"]'
    );

    firstNameInput.value = 'code John';
    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.value = 'Doe';
    lastNameInput.dispatchEvent(new Event('input'));
    moreThanTwoYearsExperienceInput.checked = true;
    moreThanTwoYearsExperienceInput.dispatchEvent(new Event('change'));

    form.dispatchEvent(new Event('submit'));

    fixture.detectChanges();

    expect(console.log).toHaveBeenCalledWith('Form submitted:', {
      firstName: 'code John',
      lastName: 'Doe',
      moreThanTwoYearsExperience: true,
      preferredLanguage: '',
      favoriteLanguage: '',
    });
  });
});
