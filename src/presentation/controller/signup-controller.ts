import { ok } from "../helpers";
import { Controller, HttpResponse } from "../protocols";

export class SignupController implements Controller {
    constructor() {}
    async handle(): Promise<HttpResponse> {
        try {
            return ok({});
        } catch (err) {
            console.log(err);   // 에러 로깅하기
        }
    }
}