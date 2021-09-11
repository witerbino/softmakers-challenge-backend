export class PrismaUserRepository {
  #database = undefined;

  constructor(prismaClient) {
    this.#database = prismaClient;
  }

  createUser(user) {
    return this.#database.user.create({
      data: user
    });
  }

  getUserByEmail(email) {
    return this.#database.user.findUnique({
      where: { email }
    });
  }
}