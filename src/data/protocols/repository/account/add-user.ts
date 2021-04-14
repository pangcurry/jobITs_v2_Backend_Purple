export class AddUserRepository {
    addUser: (account: AddUserRepository.Params) => Promise<boolean>;
}
export namespace AddUserRepository {
    export type Params = {
        id: string,
        password: string,
        name: string,
    }
}
