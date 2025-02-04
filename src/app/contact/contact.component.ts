import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule , ReactiveFormsModule , FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm: FormGroup;
  isChatVisible: boolean = false;
  chatMessage: string = '';
  str :string="abc@gmail.com";

  constructor(private fb: FormBuilder) {
    // Initialize form with form controls and validation
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Form Submitted:', formData); // For now, log the form data
      alert('Your message has been sent! We will update you shortly');
      this.contactForm.reset(); // Reset the form after submission
    }
  }

  // Toggle chat visibility
  toggleChat() {
    this.isChatVisible = !this.isChatVisible;
  }

  // Send chat message
  sendChatMessage() {
    if (this.chatMessage.trim()) {
      console.log('Chat Message:', this.chatMessage); // Log the message for now
      this.chatMessage = ''; // Clear chat input after sending
    }
  }
}
