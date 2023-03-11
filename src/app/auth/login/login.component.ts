import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {componentChangeAnimation} from "../../animations/component-change.animation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/form-styles.css'],
  animations: [componentChangeAnimation]
})
export class LoginComponent implements OnInit {

  loginMode: boolean = true;
  isStudent: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  signUpForm: FormGroup = new FormGroup({
    lastName: new FormControl(''),
    firstName: new FormControl(''),
    patronymic: new FormControl(''),
    gender: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    passwordCheck: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  studentCheck(event: any) {
    this.isStudent = event.currentTarget.checked;

    if (this.isStudent) {
      this.signUpForm.addControl('faculty', new FormControl(''));
      this.signUpForm.addControl('group', new FormControl(''));
    } else {
      this.signUpForm.removeControl('faculty');
      this.signUpForm.removeControl('group');
    }
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  onSignUp() {
    console.log(this.signUpForm.value);
  }

  checkPassword() {
    const password: string = this.signUpForm.get('password').value,
      passwordCheck: string = this.signUpForm.get('passwordCheck').value;

    return this.signUpForm.get('password').touched
      && this.signUpForm.get('passwordCheck').touched
      && password !== passwordCheck;
  }

}
