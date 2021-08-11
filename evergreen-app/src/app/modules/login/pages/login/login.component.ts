import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routePath } from '@core/constans/route.path';
import { AuthService } from '@core/services/auth.service';
import { forbiddenLoginValidator } from '@shared/components/validators/login-validator';
import { PasswordValidation } from '@shared/components/validators/password-validator';

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
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signForm = this.formBuilder.group({
      email: new FormControl(
        null,
        [
          Validators.email,
          Validators.required,
          forbiddenLoginValidator('obj@wp.pl')
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(8),
          PasswordValidation.objectivity
        ]
      ),
    });
  }



  onSubmit(): void {
    if (
      this.signForm.valid &&
      this.signForm.get('password').value === 'objectivity'
    ) {
      this.authService.loggedIn = true;
      this.router.navigate(['/', routePath.home]);
    } else {
      alert('wrong password! Password is "objectivity"');
      this.signForm.controls.email.markAsTouched();
      this.signForm.controls.password.markAsTouched();
    }
  }
}
