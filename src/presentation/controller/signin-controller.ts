import { ServerError } from "../errors/server-error";
import { badRequest, ok, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninController implements Controller {
    constructor(
        private readonly validation: joiValidation
    ) {}
    async handle (request: SigninController.Request): Promise<HttpResponse> {
        try {
            const error = await this.validation.joiValidate(request);
            if(error.message === `Internal server error`) {
                return serverError(error);  //서버 메시지로 구분함
            }
            if(!!error) {
                return badRequest(error);
            }


            
            return ok({message: "token"});
        }
        catch(err) {
            return serverError(new ServerError());
        }
    }
}

export namespace SigninController {
    export type Request = {
        sId: string,
        sPassword: string
    }
}