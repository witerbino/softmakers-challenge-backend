import { Router } from 'express';
import { routersUser } from './users.router.js';

const routerApp = Router();

routerApp.use('/users', routersUser);

export default routerApp;