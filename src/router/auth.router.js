import { Router } from 'express';
import { authFactoryController } from '../factory/auth.factory.js';

const routerAuth = Router();

routerAuth.post('/', (req, res) => {
  return authFactoryController().authenticate(req, res);
});

export { routerAuth };