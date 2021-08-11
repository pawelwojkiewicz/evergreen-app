import { routePath } from '@core/constans/route.path';
import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
describe('loginComponent', () => {

  let fixture: ComponentFixture<LoginComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    fixture =  TestBed.createComponent(LoginComponent);
  });


  it(`should signForm be invalid when password is different than 'objectivity'`, () => {

    fixture.detectChanges();

    const signForm = fixture.componentInstance.signForm;
    const email = 'test@wp.pl';
    const password = 'test';

    signForm.controls.email.setValue(email);
    signForm.controls.password.setValue(password);
    fixture.componentInstance.onSubmit();

    expect(signForm.valid).toBeFalse();

  });

  it(`should signForm be invalid when email is 'obj@wp.pl'`, () => {

    fixture.detectChanges();

    const signForm = fixture.componentInstance.signForm;
    const email = 'obj@wp.pl';
    const password = 'objectivity';

    signForm.controls.email.setValue(email);
    signForm.controls.password.setValue(password);
    fixture.componentInstance.onSubmit();

    expect(signForm.valid).toBeFalse();

  });

  it(`should navigate to homepage when form is valid'`, () =>  {

    fixture.detectChanges();

    const signForm = fixture.componentInstance.signForm;
    const email = 'test@wp.pl';
    const password = 'objectivity';

    signForm.controls.email.setValue(email);
    signForm.controls.password.setValue(password);
    fixture.componentInstance.onSubmit();

    expect(signForm.valid).toBeTrue();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/', routePath.home]);

  });

});
