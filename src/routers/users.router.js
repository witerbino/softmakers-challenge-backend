import { Router } from 'express';
import { userFactoryController } from '../factories/user.factory.js';

const routersUser = Router();

routersUser
  .get('/', (req, res) => userFactoryController().index(req, res))
  .get('/:id', (req, res) => userFactoryController().get(req, res))
  .post('/', (req, res) => userFactoryController().create(req, res));

export { routersUser };