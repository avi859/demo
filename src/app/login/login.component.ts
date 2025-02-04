import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-login',
  imports: [ FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent{
@ViewChild('myForm') myForm!:NgForm;
constructor(private _msgService: AuthService){
 
}
  onSubmit(form:NgForm){
    console.log(form);
    this.submitted=true;
    this.formData.username = this.myForm.value.username;
    this.formData.email = this.myForm.value.email;
    this.formData.course = this.myForm.value.course;
  }
  defaultCourse:string ="Angular";
  setUsername() {
    // this.myForm.setValue({
    //   username:'avi',
    //   email: 'abc@gmail.com',
    //   course:'Html'
    // })
    // this.myForm.form.patchValue({
    //   username:'avi'
    // })
  }
  submitted:boolean=false;
  formData={
    username:'',
    email:'',
    course:''
  }
  
}