export class UserController {
  #service = undefined;

  constructor(userService) {
    this.#service = userService;
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = await this.#service.register({
        name, email, password
      });

      return res.status(201)
        .json(user);
    } catch (error) {
      return res.status(400)
        .json({ message: error.message });
    }
  }
}