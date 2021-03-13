import { HttpResponse, Middleware } from "../protocols";

export class AuthMiddleware implements Middleware {
    constructor() {}
    async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
        
    }
}

export namespace AuthMiddleware {
    export type Request = {
        accessToken?: string
    }
}