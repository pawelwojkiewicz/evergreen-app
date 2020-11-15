import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

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
          [
            { path: 'home', component: DummyComponent }
          ]
        )
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
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

  it(`should be at '/' path before click Log in button`, () => {
    expect(location.path()).toBe('');
  });

  it(`should redirect to 'home' after click log in button`, () => {
    btn.click();
    fixture.detectChanges();
    fixture.whenStable().then(
      () => {
        expect(location.path()).toBe('/home');
      }
    );
  });

});


// Create DummyComponent

@Component({ template: '' })
class DummyComponent { }
