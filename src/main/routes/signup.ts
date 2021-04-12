import { Router } from 'express';
import { adaptRoute } from '../adapters';
import { makeSignupController } from '../factories/controllers/signup-controller-factory';

export default (router: Router): void => {
    router.post('/signup', adaptRoute(makeSignupController()));
}
