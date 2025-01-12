import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  firstName: string;
  lastName: string;
  moreThanTwoYearsExperience: boolean;
  preferredLanguage: string;
  favoriteLanguage: string;
}

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          Validators.pattern('^code.*'),
        ],
      ],
      lastName: ['', Validators.required],
      moreThanTwoYearsExperience: [false],
      yearsOfExperience: [''],
      companyName: [''],
      preferredLanguage: ['', Validators.required],
      favoriteLanguage: ['', Validators.required],
      skills: this.fb.array([]),
    });

    this.form
      .get('moreThanTwoYearsExperience')
      ?.valueChanges.subscribe((hasExperience) => {
        if (hasExperience) {
          this.form
            .get('yearsOfExperience')
            ?.setValidators([
              Validators.required,
              Validators.min(2),
              Validators.max(50),
            ]);
          this.form.get('companyName')?.setValidators([Validators.required]);
        } else {
          this.form.get('yearsOfExperience')?.clearValidators();
          this.form.get('companyName')?.clearValidators();
        }

        this.form.get('yearsOfExperience')?.updateValueAndValidity();
        this.form.get('companyName')?.updateValueAndValidity();
      });

    this.addSkill();
  }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  createSkillFormGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      yearsExperience: [
        '',
        [Validators.required, Validators.min(0), Validators.max(50)],
      ],
    });
  }

  addSkill() {
    this.skills.push(this.createSkillFormGroup());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    if (this.form.valid) {
      const formData: FormData = this.form.value;
      console.log('Form submitted:', formData);

      // Optional: Reset form after submission
      this.form.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  getControlError(controlName: string, validationName: string) {
    return this.form.get(controlName)?.errors?.[validationName];
  }
}
