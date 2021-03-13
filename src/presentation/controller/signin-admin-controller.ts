import { Controller, HttpResponse } from "../protocols";

export class SigninAdminController implements Controller {
    constructor() {}
    async handle(request: SigninAdminController.Request): Promise<HttpResponse> {
        
    }
}

export namespace SigninAdminController {
    export type Request = {
        id: string,
        password: string
    }
}
