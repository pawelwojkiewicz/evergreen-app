import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenLoginValidator(login: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbiddenMail = control.value?.toLowerCase() === login;
    return forbiddenMail ? { forbiddenLogin: control.value } : null;
  };
}
