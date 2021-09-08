import database from '../config/database.js';

import { UserRepository } from '../repository/UserRepository.js';
import { UserController } from '../controllers/UserController.js';

const repository = new UserRepository(database);

function userFactoryController() {
  return new UserController(repository);
}

export { userFactoryController };