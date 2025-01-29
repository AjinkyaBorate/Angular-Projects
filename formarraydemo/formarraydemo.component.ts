import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formarraydemo',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './formarraydemo.component.html',
  styleUrl: './formarraydemo.component.css'
})
export class FormarraydemoComponent {

  myform!:FormGroup;
  constructor(private fb:FormBuilder){
    this.myform=this.fb.group({
      contactlist:this.fb.array([
        this.fb.control('')
      ])
    });
  }
  get contactlist(){
    return this.myform.get('contactlist') as FormArray
  }

  addNewContact(){
    this.contactlist.push(this.fb.control(''))
  }

  removeContact(i:any){
    this.contactlist.removeAt(i);
  }
}
/*
FormArray is a class in Angular that allows you to create a group of FormControl objects dynamically.
 It is useful when you want to allow users to add or remove form inputs dynamically, 
 such as adding multiple email addresses or phone numbers.

In the example above, we are creating a form group called myForm with a 
form array called emailList that contains one FormControl with an empty string as the initial value.

we are using the emailList FormArray in the template to display a list of email inputs. 
We are using formArrayName to bind the FormArray to the parent form group, and formControlName 
to bind each email input to a specific FormControl object in the FormArray.


In Angular, "email list.controls" refers to a collection of individual "FormControl" objects within
 a "FormArray" that are designed to capture multiple email addresses from a user, allowing you to 
 dynamically add or remove email fields from a form, essentially creating an "email list" where each entry 
is treated as a separate controlled input field with validation capabilities. 
*/ 