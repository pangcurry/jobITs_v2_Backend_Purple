import { SigninAdminController } from "../../../presentation/controller";
import { Controller } from "../../../presentation/protocols";

export const makeSigninAdminController = (): Controller => {
    return new SigninAdminController();
}