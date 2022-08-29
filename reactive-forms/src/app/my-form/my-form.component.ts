import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent  {

  // a FormGroup is a group of FormControl objects. Each form field requires
  // an associated FormControl inside FormGroup.
  // Each formControl can be passed an array of Validator functions as the second
  // argument. You can create your own as well. Reminiscend of Sequelize.
  // This keeps all of the logic out of the form itself - the view - and keeps it in the
  // view model.
  formGroup = new FormGroup({
    name: new FormControl('blub', Validators.required), // can pass in an initial value if you want
    email: new FormControl('flub', [Validators.required, Validators.pattern("\\S+@\\S+\\.\\S+")])
  })
// The next two should really be a single function that accepts an element as an argument.
// Can also use the dirty property - touched means the user has entered the textbox,
// dirty means they've changed it. It's just a UX thing.
  nameIsInvalidAndTouched() {
    return this.formGroup.controls.name.touched && this.formGroup.controls.name.invalid;
  }
  emailIsInvalidAndTouched() {
    return this.formGroup.controls.email.touched && this.formGroup.controls.email.invalid;
  }

  handleSubmit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value)
    }
  }

}
