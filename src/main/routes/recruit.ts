import { Express } from 'express';

export default (app: Express): void => {
    app.get('/recruit/basic');
    app.get('/recruit/search');
}
