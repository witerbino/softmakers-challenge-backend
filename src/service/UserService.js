import bcrypt from 'bcryptjs';

export class UserService {
  #repository = undefined;

  constructor(repository) {
    this.#repository = repository;
  }

  async #generateHashPassword(password) {
    return bcrypt.hash(password, 10);
  }

  async register({ name, email, password }) {
    if (!name || !email || !password) {
      throw new Error('Todos os campos são obrigatórios');
    }

    const userExist = await this.#repository.getUserByEmail(email);

    if (userExist) {
      throw new Error('Email já cadastrado');
    }

    const hashPassword = await this.#generateHashPassword(password);

    const userCreated = await this.#repository.createUser({
      name, 
      email, 
      password: hashPassword
    });

    delete userCreated.password;

    return userCreated;
  }
}