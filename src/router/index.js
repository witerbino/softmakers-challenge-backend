import { Router } from 'express';
import { routerUser } from './user.router.js';
import { routerAuth } from './auth.router.js';
import { routerPost } from './post.router.js';

const routerApp = Router();

routerApp.use('/register', routerUser);
routerApp.use('/login', routerAuth);
routerApp.use('/posts', routerPost);

export default routerApp;