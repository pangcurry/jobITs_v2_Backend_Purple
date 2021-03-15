import { Request, Response, Router } from 'express';
import { BcryptAdapter } from '../../infra/cryptography';

export default (router: Router): void => {
    router.get('/encryption', async (req: Request, res: Response) => {
        const bcryptAdapter = new BcryptAdapter(3);
        const chipherText: string = await bcryptAdapter.hash(req.body.text);
        res.status(200).json({
            chipherText
        })
    });
}
