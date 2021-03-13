import { badRequest, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninAdminController implements Controller {
    constructor(
        private readonly validation: joiValidation
    ) {}
    async handle(request: SigninAdminController.Request): Promise<HttpResponse> {
        const error = await this.validation.joiValidate(request);
        if(error.message === `Internal server error`) {
            return serverError(error);
        }
        if(!!error) {
            return badRequest(error);
        }
        
    }
}

export namespace SigninAdminController {
    export type Request = {
        id: string,
        password: string
    }
}
