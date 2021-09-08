export class UserController {
  #repository;

  constructor(userRepository) {
    this.#repository = userRepository;
  }

  async index(req, res) {
    try {
      const users = await this.#repository.getAllUsers();
      return res.status(200)
        .json(users);
    } catch(error) {
      return res.status(500)
        .json({ message: error.erro });
    }
  }

  async get(req, res) {
    const user = await this.#repository.getUserById(req.params.id);
    return res.status(200)
      .json(user);
  }

  async create(req, res) {
    const { name, status } = req.body;
    const user = await this.#repository.createUser({ name, status });
    return res.status(201)
      .json(user);
  }
}