import { Express } from 'express';

export default (app: Express): void => {
    app.get('/info/name');
}
