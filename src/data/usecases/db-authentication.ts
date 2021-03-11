import { Authentication } from "../../domain/usecases";
import { LoadUserByEmailRepository } from "../protocols/repository";

export class DbAuthentication implements Authentication {
    constructor(
        private readonly loadAccountByEmailRepository: LoadUserByEmailRepository
        // private readonly
        // private readonly
        // private readonly
    ) {}

    async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result> {
        const user = await this.loadAccountByEmailRepository.loadByEmail(authenticationParams.id);
        console.log(!!user);
        return {
            accessToken: 'testid',
            refreshToken: 'testpassword'
        };  //test
    }

}