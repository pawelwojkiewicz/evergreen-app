import { FormControl } from '@angular/forms';
import { forbiddenLoginValidator } from '@shared/components/validators/login-validator';

describe('loginValidator', () => {
  const loginValidator = forbiddenLoginValidator('test@wp.pl');

  it('should return correct object if input string is test@wp.pl', () => {

    const control = new FormControl('test@wp.pl');

    const result = loginValidator(control);

    expect(result).toEqual({ forbiddenLogin: 'test@wp.pl' });

  });

  it('should return null if input string is different than test@wp.pl', () => {

    const control = new FormControl('obj@wp.pl');

    const result = loginValidator(control);

    expect(result).toBeNull();

  });
});
