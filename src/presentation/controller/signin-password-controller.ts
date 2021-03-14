import { LoadUserById, PasswordAuthentication, UpdateAccount } from "../../domain/usecases";
import { badRequest, serverError } from "../helpers";
import { Controller, HttpResponse, joiValidation } from "../protocols";

export class SigninPasswordController implements Controller {
    constructor(
        // private readonly loadUserByIdRepository: LoadUserById,
        private readonly validation: joiValidation,
        private readonly authentication: PasswordAuthentication,
        private readonly updateAccount: UpdateAccount
    ) {}
    async handle(info:SigninPasswordController.Request): Promise<HttpResponse> {
        const { id, oldPw, newPw } = info;
        const validate = await this.validation.joiValidate({ oldPw, newPw });
        if(validate.message === `Internal server error`) {
            return serverError(validate);
        }
        if(!!validate) {
            return badRequest(validate);
        }
        // const user = await this.loadUserByIdRepository.load(id);
        // const { password, error } = user;
        // if(error) {
        //     return error;
        // }
        const isValid = await this.authentication.auth(info);
        if(isValid.error) {
            return isValid.error;
        }
        // 여기서부터 만들기
        const update = await this.updateAccount 
        const save = 'save';


    }
}

export namespace SigninPasswordController {
    export type Request = {
        id: string,
        oldPw: string,
        newPw: string
    }
}