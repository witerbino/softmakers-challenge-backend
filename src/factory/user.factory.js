import database from '../config/database.js';

import { UserService } from '../service/UserService.js';
import { UserController } from '../controller/UserController.js';
import { PrismaUserRepository } from '../repository/PrismaUserRepository.js';

function userFactoryController() {
  const repository = new PrismaUserRepository(database);
  const service    = new UserService(repository);

  return new UserController(service);
}

export { userFactoryController };