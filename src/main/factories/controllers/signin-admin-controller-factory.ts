import { SigninAdminController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";
import { makeSigninAdminValidation } from "../validations";

export const makeSigninAdminController = (): Controller => {
    return new SigninAdminController(makeSigninAdminValidation());
}