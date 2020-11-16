import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let emailLabel: HTMLLabelElement;
  let passwordLabel: HTMLLabelElement;
  let h1: HTMLHeadingElement;
  let btn: HTMLButtonElement;
  let link: HTMLLinkElement;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],

      // as component we use empty dummy component which we declare in bottom.
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: 'home', component: DummyComponent }]
        ),
        ReactiveFormsModule,
        FormsModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
    location = TestBed.inject(Location);
    h1 = fixture.nativeElement.querySelector('h1');
    emailLabel = fixture.nativeElement.querySelector('label[for="email"]');
    passwordLabel = fixture.nativeElement.querySelector('label[for="password"]');
    btn = fixture.nativeElement.querySelector('button');
    link = fixture.nativeElement.querySelector('a');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title text 'Log in as a health professional'`, waitForAsync(() => {
    expect(component.title).toEqual('Log in as a health professional');
  }));

  it('should have h1 with title text', waitForAsync(() => {
    fixture.detectChanges();
    expect(h1.innerText).toEqual(component.title);
  }));


  it(`should have label with text 'Email address'`, waitForAsync(() => {
    fixture.detectChanges();
    expect(emailLabel.innerText).toEqual('Email address');
  }));

  it(`should have label with text 'Password'`, waitForAsync(() => {
    fixture.detectChanges();
    expect(passwordLabel.innerText).toEqual('Password');
  }));

  it(`should have btn with text 'Log in'`, waitForAsync(() => {
    fixture.detectChanges();
    expect(btn.innerText).toEqual('Log in');
  }));

  it(`should have link with text 'Forgotten your login details?'`, waitForAsync(() => {
    fixture.detectChanges();
    expect(link.innerText).toEqual('Forgotten your login details?');
  }));

  it('form should be invalid when empty', waitForAsync(() => {
    expect(component.signForm.valid).toBeFalsy();
  }));

  it('email field validity', waitForAsync(() => {
    const email = component.signForm.controls.email;
    let errors: any = {};
    errors = email.errors || {};
    expect(email.valid).toBeFalsy();
    expect(errors.required).toBeTruthy();

    email.setValue('test');
    expect(email.valid).toBeFalsy();
    expect(errors.required).toBeTruthy();

    email.setValue('test@wp.pl');
    errors = email.errors || {};
    expect(email.valid).toBeTruthy();
    expect(errors.required).toBeFalsy();
  }));

  it('password field validity', waitForAsync(() => {
    const password = component.signForm.get('password');
    let errors: any = {};
    errors = password.errors || {};
    expect(password.valid).toBeFalsy();
    expect(password.hasError('required')).toBeTruthy();

    password.setValue('test');
    expect(password.valid).toBeFalsy();
    expect(password.hasError('minlength')).toBeTruthy();

    password.setValue('test1234');
    expect(password.valid).toBeTruthy();
    expect(password.hasError('minlength')).toBeFalsy();
  }));

  it(`should direct to home page when form is valid`, waitForAsync(() => {
    expect(component.signForm.valid).toBeFalsy();
    component.signForm.controls.email.setValue('test@wp.pl');
    component.signForm.controls.password.setValue('test1234');
    expect(component.signForm.valid).toBeTruthy();
    btn.click();
    fixture.whenStable().then(
      () => {
        expect(location.path()).toBe('/home');
      }
    );
  }));
});


// Create DummyComponent

@Component({ template: '' })
class DummyComponent { }
