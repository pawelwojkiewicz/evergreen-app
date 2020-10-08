import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  buttonConfig = {
    class: 'btn btn-primary w-100',
  };
  emailInput = {
    type: 'email',
    id: 'email',
    placeholder: 'Enter email address',
    name: 'email',
  };
  passwordInput = {
    type: 'password',
    id: 'password',
    placeholder: 'Enter password',
    name: 'password',
  };
  emailLabel = {
    for: 'email',
    text: 'Email address',
  };
  passwordLabel = {
    for: 'password',
    text: 'Password',
  };

  constructor() {}

  ngOnInit(): void {}

  test() {
    console.log('test');
  }
}
