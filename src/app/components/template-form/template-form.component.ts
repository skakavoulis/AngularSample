import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

interface FormData {
  firstName: string;
  lastName: string;
  moreThanTwoYearsExperience: boolean;
  preferredLanguage: string;
  favoriteLanguage: string;
}

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  model: FormData = {
    firstName: '',
    lastName: '',
    moreThanTwoYearsExperience: true,
    preferredLanguage: '',
    favoriteLanguage: '',
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData: FormData = form.value;
      console.log('Form submitted:', formData);

      // Optional: Reset form after submission
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }

  onModelChange(value: string) {
    let newValue = value.charAt(0).toUpperCase();
    newValue += value.slice(1).toLowerCase();
    this.model.firstName = newValue;
  }
}
