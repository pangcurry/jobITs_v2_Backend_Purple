import { schema } from '../config';

export class JoiAdapter {
    constructor() {}
    async isValidSId(sId: string): Promise<boolean> {
        try {
            await schema.validateAsync({ sId });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

    async isValidSPassword(sPassword: string): Promise<boolean> {
        try {
            await schema.validateAsync({ sPassword });
            return true;
        }
        catch(err) {
            console.log(err);   // error 로깅
            return false;
        }
    };

}
