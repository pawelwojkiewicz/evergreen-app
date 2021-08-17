// import { routePath } from '@core/constans/route.path';
// import { LoginComponent } from './login.component';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { By } from '@angular/platform-browser';
// import { ValidationComponent } from '../../components/validation/validation.component';
// describe('loginComponent', () => {

//   let fixture: ComponentFixture<LoginComponent>;
//   let signForm: FormGroup;
//   const routerSpy = {navigate: jasmine.createSpy('navigate')};

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         ReactiveFormsModule
//       ],
//       declarations: [
//         LoginComponent,
//         ValidationComponent
//       ],
//       providers: [
//         { provide: Router, useValue: routerSpy }
//       ]
//     });
//     fixture =  TestBed.createComponent(LoginComponent);
//     fixture.detectChanges();
//     signForm = fixture.componentInstance.signForm;
//   });

//   it(`should has 'Log in as a health professional' text in h1`, () => {

//     const h1 = fixture.debugElement.query(By.css('h1')).nativeElement.textContent;

//     expect(h1).toEqual('Log in as a health professional');
//   })

//   it('should run onSubmit() method when clicked Login', () => {

//     spyOn(fixture.componentInstance, 'onSubmit');

//     const loginButton = fixture.debugElement.query(By.css('.login__btn')).nativeElement;

//     loginButton.click();

//     expect(fixture.componentInstance.onSubmit).toHaveBeenCalled();
//   })

//   it(`should signForm be invalid when password is different than 'objectivity'`, () => {

//     signForm.controls.email.setValue('test@wp.pl');
//     signForm.controls.password.setValue('test');
//     fixture.componentInstance.onSubmit();

//     expect(signForm.valid).toBeFalse();
//     expect(signForm.controls.email.touched).toBe(true);
//     expect(signForm.controls.password.touched).toBe(true);

//   });

//   it(`should signForm be invalid when email is 'obj@wp.pl'`, () => {

//     signForm.controls.email.setValue('obj@wp.pl');
//     signForm.controls.password.setValue('objectivity');
//     fixture.componentInstance.onSubmit();

//     expect(signForm.valid).toBeFalse();
//     expect(signForm.controls.email.touched).toBe(true);
//     expect(signForm.controls.password.touched).toBe(true);

//   });

//   it(`should navigate to homepage when form is valid'`, () =>  {

//     signForm.controls.email.setValue('test@wp.pl');
//     signForm.controls.password.setValue('objectivity');
//     fixture.componentInstance.onSubmit();

//     expect(signForm.valid).toBeTrue();
//     expect(signForm.controls.email.touched).toBe(false);
//     expect(signForm.controls.password.touched).toBe(false);
//     expect(routerSpy.navigate).toHaveBeenCalledWith(['/', routePath.home]);

//   });

//   describe('validation', () => {

//     it('should ValidationComponent be created', () => {

//       const validationComponentDEs = fixture.debugElement.query(By.directive(ValidationComponent));

//       expect(validationComponentDEs).toBeTruthy();

//     })

//     it('should show email error message when email is not correct', () => {

//       const validationComponentDEs = fixture.debugElement.queryAll(By.directive(ValidationComponent));

//       signForm.controls.email.setValue('obj@');
//       signForm.controls.password.setValue('objectivity');
//       fixture.componentInstance.onSubmit();
//       fixture.detectChanges();

//       const error = fixture.debugElement.query(By.css('#emailError')).nativeElement.textContent;

//       expect(validationComponentDEs[0].componentInstance.control).toEqual( signForm.controls.email);
//       expect(error).toEqual('Please put correct e-mail. ')

//     })

//     it('should show forbidden email error message when email is forbidden', () => {

//       const validationComponentDEs = fixture.debugElement.queryAll(By.directive(ValidationComponent));

//       signForm.controls.email.setValue('obj@wp.pl');
//       signForm.controls.password.setValue('objectivity');
//       fixture.componentInstance.onSubmit();
//       fixture.detectChanges();

//       const error = fixture.debugElement.query(By.css('#forbiddenEmailError')).nativeElement.textContent;

//       expect(validationComponentDEs[0].componentInstance.control).toEqual(signForm.controls.email);
//       expect(error).toEqual(' Sorry, obj@wp.pl is forbidden!');

//     })

//     it(`should show password short error message when password is too short
//         and and pass password control to Input`, () => {

//       const validationComponentDEs = fixture.debugElement.queryAll(By.directive(ValidationComponent));

//       signForm.controls.email.setValue('test@wp.pl');
//       signForm.controls.password.setValue('obj');
//       fixture.componentInstance.onSubmit();
//       fixture.detectChanges();

//       const error = fixture.debugElement.query(By.css('#minLengthError')).nativeElement.textContent;

//       expect(validationComponentDEs[1].componentInstance.control).toEqual(signForm.controls.password);
//       expect(error).toEqual(' The password is too short. ');

//     })

//     it(`should show wrong password message when password is not 'objectivity'
//         and pass password control to Input`, () => {


//       const validationComponentDEs = fixture.debugElement.queryAll(By.directive(ValidationComponent));

//       console.log(validationComponentDEs);

//       signForm.controls.email.setValue('test@wp.pl');
//       signForm.controls.password.setValue('obj');
//       fixture.componentInstance.onSubmit();
//       fixture.detectChanges();

//       const error = fixture.debugElement.query(By.css('#wrongCompanyError')).nativeElement.textContent;

//       expect(validationComponentDEs[1].componentInstance.control).toEqual(signForm.controls.password);
//       expect(error).toEqual(' Sorry, obj is wrong!');

//     })
//   })
// });
