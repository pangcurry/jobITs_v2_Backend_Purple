import { SigninController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeSigninValidation } from "../validations";
// makeDbAuthentication(), 
export const makeSigninController = (): Controller => {
    return new SigninController(makeSigninValidation());
    // decorater로 변환하기
};
