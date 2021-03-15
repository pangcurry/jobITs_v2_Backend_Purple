import { Authentication, TokenAuthentication } from "../../domain/usecases";
import { AuthenticationFailureError, UserNotFoundError } from "../../presentation/errors";
import { forbidden, notFound } from "../../presentation/helpers";
import { Encrypter, HashComparer, Verifier } from "../protocols/cryptography";
import { LoadUserByEmailRepository } from "../protocols/repository";

const accessToken_config = {
    issuer: 'JobITs',
    expiresIn: '10d'
}
const refreshToken_config = {
    issuer: 'JobITs',
    expiresIn: '100d'
}

const admin_config = {  // 추후 env처리
    name: "JOBITS_ADMIN",
    numOfName: 12
}

export class DbTokenAuthentication implements TokenAuthentication {
    constructor(
        // private readonly loadAccountByEmailRepository: LoadUserByEmailRepository,
        // private readonly hashComparer: HashComparer,
        private readonly jwtEncrypter: Encrypter,
        private readonly jwtVerifier: Verifier
        
    ) {}

    async auth(authenticationParams: TokenAuthentication.Params): Promise<TokenAuthentication.Result> {
        // 리프레시 토큰이 유효한가?
        // decoded.id 와 리프레시 토큰의 아이디가 같은가
        // decoded.id 가 db에 존재하는가
        // /decoded.id 와 JOBITS_ADMIN이 같은가 -> isAdmin 설정
        

        const user = await this.loadAccountByEmailRepository.loadById(authenticationParams.id);
        console.log(!!user);    // test logging
        if(user) {
            const isVlid = await this.hashComparer.compare(authenticationParams.password, user.password);
            // const isVlid = true;    // 임시로 비번 오픈
            if(isVlid) {
                let isAdmin: boolean = false;
                if(user.name === admin_config.name) {
                    isAdmin = true;
                }
                const accessToken = await this.jwtEncrypter.encrypt({
                    ...accessToken_config,
                    user_id: user.id,
                    isAdmin
                });
                const refreshToken = await this.jwtEncrypter.encrypt({
                    ...refreshToken_config,
                    user_id: user.id,
                    isAdmin
                });
                return { accessToken, refreshToken };
            }
            return { error: forbidden(new AuthenticationFailureError()) }
        }
        return { error: notFound(new UserNotFoundError()) };
    }
}
