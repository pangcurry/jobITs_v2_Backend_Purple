import { Authentication } from "../../domain/usecases";
import { HashComparer } from "../protocols/cryptography";
import { LoadUserByEmailRepository } from "../protocols/repository";

export class DbAuthentication implements Authentication {
    constructor(
        private readonly loadAccountByEmailRepository: LoadUserByEmailRepository,
        private readonly hashComparer: HashComparer
        // private readonly
        // private readonly
        // private readonly
    ) {}

    async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result> {
        const user = await this.loadAccountByEmailRepository.loadByEmail(authenticationParams.id);
        console.log(!!user);
        if(user) {
            const isVlid = await this.hashComparer.compare(authenticationParams.password, user.password);
            if(isVlid) {
                
            }
        }
        
        return {
            accessToken: 'testid',
            refreshToken: 'testpassword'
        };  //test
    }

}