import { Express } from 'express';

export default (app: Express): void => {
    app.post('/token/refresh');
}
