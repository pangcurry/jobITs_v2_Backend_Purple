import { HttpResponse } from "../../presentation/protocols"

export interface AddAccount {
    add: (account: AddAccount.Params) => Promise<AddAccount.Result>;
}

export namespace AddAccount {
    export type Params = {
        id: string,
        password: string,
        name: string
    };
    export type Result = {
        error?: HttpResponse
    };
}