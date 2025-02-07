import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormService } from '../services/form.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormSubmitResponse } from '../models/form-submit-response.model';  // Import the response interface

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('myForm') myForm!: NgForm;
  submitted: boolean = false;
  defaultCourse: string = "Angular";

  formData = {
    username: '',
    email: '',
    course: '',
    dob: '',
    phone: '',
    location: '',
    gender: ''
  };

  constructor(private _msgService: AuthService, private formService: FormService) {}  // Inject FormService

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;

    // Populate formData with form values
    this.formData.username = this.myForm.value.username;
    this.formData.email = this.myForm.value.email;
    this.formData.course = this.myForm.value.course;
    this.formData.dob = this.myForm.value.dob;
    this.formData.phone = this.myForm.value.phone;
    this.formData.location = this.myForm.value.location;
    this.formData.gender = this.myForm.value.gender;

    // Call the FormService to submit the form
    this.formService.submitForm(this.formData).subscribe(
      (response: FormSubmitResponse) => {
        // Handle the successful form submission
        console.log('Form submitted successfully:', response.message);
        this.submitted = true;
      },
      error => {
        // Handle the error if the form submission fails
        console.error('Error submitting form', error);
      }
    );
  }
}
