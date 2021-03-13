import { Router } from 'express';
import { adaptRoute } from '../adapters';

export default (router: Router): void => {
    router.get('/info/name', adaptRoute());
}
