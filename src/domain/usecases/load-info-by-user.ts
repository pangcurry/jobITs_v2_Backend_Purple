export interface LoadInfoByUser {
    loadInfo: (id: string) => Promise<LoadInfoByUser.Result>
}

export namespace LoadInfoByUser {
    export type Result = string
}