import { Express } from 'express';

export default (app: Express): void => {
    app.post('/signin/basic');
    app.post('/signin/admin');
}
