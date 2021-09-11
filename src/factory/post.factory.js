import database from '../config/database.js';

import { PostService } from '../service/PostService.js';
import { PostController } from '../controller/PostController.js';
import { PrismaPostRepository } from '../repository/PrismaPostRepository.js';

function postFactoryController() {
  const repository = new PrismaPostRepository(database);
  const service    = new PostService(repository);

  return new PostController(service);
}

export { postFactoryController };