import { ValidationComponent } from './../../components/validation/validation.component';
import { routePath } from './../../../../core/constans/route.path';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator';
import { LoginComponent } from './login.component';

describe('loginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  let signForm: FormGroup;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};
  const createComponent =  createComponentFactory({
    component: LoginComponent,
    entryComponents: [ValidationComponent],
    providers: [
      mockProvider(Router, routerSpy)
    ],
    imports: [ReactiveFormsModule]
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator.detectChanges();
    signForm = spectator.component.signForm;
  })

  it(`should has 'Log in as a health professional' text in h1`, () => {

    expect(spectator.query('h1').textContent).toEqual('Log in as a health professional');

  })

  it('should run onSubmit() method when clicked Login', () => {

    spyOn(spectator.component, 'onSubmit');

    spectator.click(spectator.query('.login__btn'));

    expect(spectator.component.onSubmit).toHaveBeenCalled();
  })

  it(`should signForm be invalid when password is different than 'objectivity'`, () => {

    signForm.controls.email.setValue('test@wp.pl');
    signForm.controls.password.setValue('test');
    spectator.component.onSubmit();

    expect(signForm.valid).toBeFalse();
    expect(signForm.controls.email.touched).toBe(true);
    expect(signForm.controls.password.touched).toBe(true);

  });

    it(`should signForm be invalid when email is 'obj@wp.pl'`, () => {

    signForm.controls.email.setValue('obj@wp.pl');
    signForm.controls.password.setValue('objectivity');
    spectator.component.onSubmit();

    expect(signForm.valid).toBeFalse();
    expect(signForm.controls.email.touched).toBe(true);
    expect(signForm.controls.password.touched).toBe(true);

  });

  it(`should navigate to homepage when form is valid'`, () =>  {

    signForm.controls.email.setValue('test@wp.pl');
    signForm.controls.password.setValue('objectivity');
    spectator.component.onSubmit();

    expect(signForm.valid).toBeTrue();
    expect(signForm.controls.email.touched).toBe(false);
    expect(signForm.controls.password.touched).toBe(false);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/', routePath.home]);

  });

    describe('validation', () => {

    it('should ValidationComponent be created', () => {

      expect(spectator.query(ValidationComponent)).toBeTruthy();

    })

    it('should show email error message when email is not correct', () => {

      const validationComponentDEs = spectator.queryAll(ValidationComponent);

      signForm.controls.email.setValue('obj@');
      signForm.controls.password.setValue('objectivity');
      spectator.component.onSubmit();
      spectator.detectChanges();

      expect(validationComponentDEs[0].control).toBe(signForm.controls.email as FormControl);

      expect(spectator.query('span[email]').textContent).toEqual('Please put correct e-mail. ')

    })
      it('should show forbidden email error message when email is forbidden', () => {

      const validationComponentDEs = spectator.queryAll(ValidationComponent);

      signForm.controls.email.setValue('obj@wp.pl');
      signForm.controls.password.setValue('objectivity');
      spectator.component.onSubmit();
      spectator.detectChanges();

      expect(validationComponentDEs[0].control).toBe(signForm.controls.email as FormControl);

      expect(spectator.query('span[forbiddenLogin]').textContent).toEqual(' Sorry, obj@wp.pl is forbidden!')

    })

    it(`should show password short error message when password is too short and and pass password control to Input`, () => {

      const validationComponentDEs = spectator.queryAll(ValidationComponent);

      signForm.controls.email.setValue('test@wp.pl');
      signForm.controls.password.setValue('obj');
      spectator.component.onSubmit();
      spectator.detectChanges();

      expect(validationComponentDEs[1].control).toBe(signForm.controls.password as FormControl);

      expect(spectator.query('span[minLength]').textContent).toEqual(' The password is too short. ')

    })

    it(`should show wrong password message when password is not 'objectivity' and pass password control to Input`, () => {

      const validationComponentDEs = spectator.queryAll(ValidationComponent);

      signForm.controls.email.setValue('test@wp.pl');
      signForm.controls.password.setValue('obj');
      spectator.component.onSubmit();
      spectator.detectChanges();

      expect(validationComponentDEs[1].control).toBe(signForm.controls.password as FormControl);

      expect(spectator.query('span[wrongCompany]').textContent).toEqual(' Sorry, obj is wrong!');

    })
  })
});
