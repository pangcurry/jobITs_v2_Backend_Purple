import { SignupController } from "../../../presentation/controller/signup-controller";
import { Controller } from "../../../presentation/protocols";

export const makeSignupController = (): Controller => {
    return new SignupController();
}