import { AbstractControl, ValidatorFn } from '@angular/forms';


export class PasswordValidation {
  static objectivity(control: AbstractControl): any | null {
    return PasswordValidation.company('objectivity')(control);
  }
  static microsoft(control: AbstractControl): any | null {
    return PasswordValidation.company('microsoft')(control);
  }

  static apple(control: AbstractControl): any | null {
    return PasswordValidation.company('apple')(control);
  }

  static company(company: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>
      control.value?.toLowerCase() === company
        ? null : { wrongCompany: control.value };
  }
}
