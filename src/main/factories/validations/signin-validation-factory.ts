import { JoiAdapter } from '../../../infra/validators';
import { Validation } from '../../../presentation/protocols';
import { SigninValidation } from '../../../validation/validators/signin-validation';

export const makeSigninValidation = (): Validation => {
    // const validations: Validation[] = [];
    const joiAdapter = new JoiAdapter();
    return new SigninValidation(joiAdapter);
};
