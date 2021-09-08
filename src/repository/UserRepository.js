export class UserRepository {
  #database;

  constructor(prismaClient) {
    this.#database = prismaClient;
  }

  createUser(user) {
    return this.#database.user.create({
      data: user
    });
  }

  getUserById(id) {
    return this.#database.user.findMany({
      where: {
        id
      }
    });
  }

  getAllUsers() {
    return this.#database.user.findMany({
      orderBy: {
        name: 'asc'
      }
    });
  }
}