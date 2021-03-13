import { DbLoadInfoByUser } from "../../../data/usecases";
import { UserRepository } from "../../../infra/db/repositories";

export const makeDbLoadInfoByUser = ():  => {
    const accountRepository = new UserRepository();
    return new DbLoadInfoByUser();
}