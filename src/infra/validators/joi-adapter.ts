import { schema } from '../config';

export class JoiAdapter {
    constructor() {}
    async isValidSId(sId: string): Promise<boolean> {
        try {
            const value = await schema.validateAsync({ sId });
            if(!value.error) {
                return true;
            }
            return false;
        }
        catch(err) {
            console.log(err.message);
            return false;
        }
    };

    async isValidSPassword(sPassword: string): Promise<boolean> {
        try {
            const value = await schema.validateAsync({ sPassword });
            if(!value.error) {
                return true;
            }
            return false;
        }
        catch(err) {
            console.log(err.message);
            return false;
        }
    };

}
