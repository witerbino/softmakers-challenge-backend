import { Router } from 'express';
import { userFactoryController } from '../factory/user.factory.js';

const routerUser = Router();

routerUser.post('/', (req, res) => {
  return userFactoryController().register(req, res);
});

export { routerUser };