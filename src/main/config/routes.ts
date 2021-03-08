import { Express } from 'express';

import signinRoutes from '../routes/signin';
import infoRoutes from '../routes/info';
import tokenRoutes from '../routes/token';
import recruitRoutes from '../routes/recruit';

export default (app: Express): void => {
    signinRoutes(app);
    infoRoutes(app);
    tokenRoutes(app);
    recruitRoutes(app);
}
