import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule} from '@angular/common';
 
@Component({
  selector: 'app-welcome',
  standalone: true,  
  imports: [ReactiveFormsModule , CommonModule ], 
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent{

   onSubmit() {
    this.studentForm.reset();
  }
 
constructor(){}
studentForm:FormGroup = new FormGroup({
  'username': new FormControl("", [Validators.required]),
  'email': new FormControl("", Validators.required),
  'selectCourse': new FormControl("" , Validators.required),
  'skills' : new FormArray([
    new FormControl("" , Validators.required),//first skill control
  ])
}) 

defaultCourse:string ="Angular"

notAllowedNames = ['Youtube' , 'Angular'];
 
get skills() {
  return (this.studentForm.get('skills') as FormArray);
}
 
addSkill() {
  this.skills.push(new FormControl('', Validators.required));
}
 
formValue:any;
submitted:boolean = false;

onSave(){
  console.log(this.studentForm)
  this.formValue = this.studentForm.value;
  this.submitted = true;
}
NaNames(control:FormControl){
 if(this.notAllowedNames.indexOf(control.value) !== -1){
  return{'name is not allowed':true}
 }
 return null;
 }
}