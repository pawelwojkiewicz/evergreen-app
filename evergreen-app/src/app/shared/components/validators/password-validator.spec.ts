import { FormControl } from '@angular/forms';
import { PasswordValidation } from './password-validator'

describe('passwordValidator', () => {

  const passwordValidator = PasswordValidation.company('testcompany');

  it('should return null if input string is testcompany', () => {

    const control = new FormControl('testcompany');

    const result = passwordValidator(control);

    expect(result).toBeNull();
  });
  it('should return object if input string is different than testcompany', () => {

    const control = new FormControl('wrongcompany');

    const result = passwordValidator(control);

    expect(result).toEqual({wrongCompany: 'wrongcompany'});
  });
});
