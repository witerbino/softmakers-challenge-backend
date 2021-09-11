export class AuthController {
  #service = undefined;

  constructor(authService) {
    this.#service = authService;
  }

  async authenticate(req, res) {
    try {
      const { user, token } = await this.#service.authenticate(
        req.body.email, 
        req.body.password
      );
      return res.status(200)
        .json({ user, token });
    } catch(error) {
      return res.status(400)
        .json({ message: error.message }); 
    }
  }
}