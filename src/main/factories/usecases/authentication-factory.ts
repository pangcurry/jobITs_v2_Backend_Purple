import { DbAuthentication } from "../../../data/usecases";
import { Authentication } from "../../../domain/usecases";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbAuthentication = (): Authentication => {
    const accountRepository = new UserRepository();
    return new DbAuthentication(accountRepository);
}