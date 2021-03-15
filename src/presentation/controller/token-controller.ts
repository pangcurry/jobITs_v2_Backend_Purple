import { TokenAuthentication } from "../../domain/usecases";
import { ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class TokenController implements Controller {
    constructor(
        private readonly authentication: TokenAuthentication
    ) {}
    async handle(request: TokenController.Request): Promise<HttpResponse> {
        // 리프레시 토큰과 액세스 토큰의 페이로드가 같은가 ex) user_id, isAdmin
        const { decoded, refreshToken } = request;
        const auth = await this.authentication.auth({ id: decoded.user_id, refreshToken });
        if(auth.error) {
            return auth.error;
        }
        // 새로운 토큰 발급
        return ok({ 
            accessToken: auth.accessToken,
            refreshToken: auth.refreshToken
        });
    }
}

export namespace TokenController {
    export type Request = {
        refreshToken: string,
        decoded: {
            issuer: string,
            expiresIn: string,
            user_id: string,
            isAdmin: boolean
        }
    }
}