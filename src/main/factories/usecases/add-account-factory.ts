import { DbAddAccount } from "../../../data/usecases";
import { AddAccount } from "../../../domain/usecases";
import { BcryptAdapter } from "../../../infra/cryptography";
import { UserRepository } from "../../../infra/db/repositories";
import env from '../../config/env';

export const makeDbAddAccount = (): AddAccount => {
    const salt = env.bcrypt.salt;
    const accountRepository = new UserRepository();
    const bcryptAdapter = new BcryptAdapter(salt);
    return new DbAddAccount(bcryptAdapter);
}