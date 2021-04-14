import { AddAccount } from "../../domain/usecases";
import { ConflictError, ServerError } from "../../presentation/errors";
import { conflict, serverError } from "../../presentation/helpers";
import { Hasher } from "../protocols/cryptography";
import { AddUserRepository } from "../protocols/repository";

export class DbAddAccount implements AddAccount {
    constructor(
        private readonly addUserRepository: AddUserRepository,
        private readonly hasher: Hasher
    ) {}
    async add(account: AddAccount.Params): Promise<AddAccount.Result> {
        try {
            const hash = await this.hasher.hash(account.password);
            const isAlreadyExist = await this.addUserRepository.addUser(account);
            if(isAlreadyExist) {
                return { error: conflict(new ConflictError()) };
                // 이미 존재한다는 메시지
            }
            

        } catch (err) {
            console.log(err);   // 에러 로깅하기
            return { error: serverError(new ServerError()) };
        }
    }
}