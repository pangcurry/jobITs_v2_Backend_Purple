import { JoiAdapter } from "../../infra/validators";
import { SigninController } from "../../presentation/controller";
import { InvalidParamError } from "../../presentation/errors";
import { Validation } from "../../presentation/protocols";

export class SigninValidation implements Validation {
    constructor(private readonly validation: JoiAdapter) {}
    validate(input: SigninController.Request ): Error {
        const isValidSId = this.validation.isValidSId(input.sId);
        const isValidSPassword = this.validation.isValidSPassword(input.sPassword);
        if(!isValidSId) {
            return new InvalidParamError('sId');
        }
        if(!isValidSPassword) {
            return new InvalidParamError('sPassword');
        }
        return null as any;
    }
}
