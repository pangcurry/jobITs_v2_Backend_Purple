import { LoadInfoByUser } from "../../domain/usecases";

export class DbLoadInfoByUser implements LoadInfoByUser {
    async loadInfo(id: string): Promise<LoadInfoByUser.Result> {
        
    }
}