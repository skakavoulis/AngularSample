import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
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
      moreThanTwoYearsExperience: [true],
      preferredLanguage: ['', Validators.required],
      favoriteLanguage: ['', Validators.required],
    });
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
}
