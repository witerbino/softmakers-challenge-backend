import database from '../config/database.js';

import { AuthService } from '../service/AuthService.js';
import { AuthController } from '../controller/AuthController.js';
import { PrismaUserRepository } from '../repository/PrismaUserRepository.js';

function authFactoryController() {
  const repository = new PrismaUserRepository(database);
  const service    = new AuthService(repository);

  return new AuthController(service);
}

export { authFactoryController };