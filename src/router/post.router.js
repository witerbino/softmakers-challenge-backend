import { Router } from 'express';
import AuthMiddleware from '../middleware/AuthMiddleware.js';
import { postFactoryController } from '../factory/post.factory.js';

const routerPost = Router();

routerPost.use(AuthMiddleware.verifyToken);

routerPost.post('/', (req, res) => {
  return postFactoryController().create(req, res);
});

routerPost.get('/', (req, res) => {
  return postFactoryController().index(req, res);
});

routerPost.get('/:id', (req, res) => {
  return postFactoryController().get(req, res);
});

routerPost.put('/:id', (req, res) => {
  return postFactoryController().update(req, res);
});

routerPost.delete('/:id', (req, res) => {
  return postFactoryController().delete(req, res);
});

export { routerPost };