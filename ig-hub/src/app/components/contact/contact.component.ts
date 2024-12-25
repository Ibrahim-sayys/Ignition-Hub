import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm: FormGroup;
  messageSent = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      age: ['', [Validators.required, Validators.min(1)]],
      idNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      query: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.messageSent = true;
      this.contactForm.reset();
    }
  }
}
