import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routePath } from 'src/app/core/constans/route.path';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  signForm: FormGroup;
  title = 'Log in as a health professional';

  constructor(
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void {
    if (this.signForm.valid && this.signForm.get('password').value === 'objectivity') {
      this.authService.loggedIn = true;
      this.router.navigate(['/', routePath.home]);
    } else {
      alert('wrong password! Password is "objectivity"');
      this.signForm.controls.email.markAsTouched();
      this.signForm.controls.password.markAsTouched();
    }
  }
}
