export class PostController {
  #service = undefined;

  constructor(postService) {
    this.#service = postService;
  }

  async create(req, res) {
    try {
      const { userId } = req;
      const { title, content } = req.body;

      const post = await this.#service.createPost({ 
        title, content, userId
      });

      return res.status(201)
        .json(post);
    } catch (error) {
      return res.status(400)
        .json({ message: error.message });
    }
  }

  async index(req, res) {
    try {
      const { userId } = req;
      const { filter, orderBy } = req.query;

      const posts = await this.#service.getAllPosts(
        filter, orderBy, userId
      );

      return res.status(201)
        .json(posts);
    } catch (error) {
      return res.status(400)
      .json({ message: error.message });
    }
  }

  async get(req, res) {
    try {
      const { id } = req.params;

      const post = await this.#service.getPostById(id);

      return res.status(201)
        .json(post);
    } catch (error) {
      return res.status(400)
        .json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const { userId } = req;
      const { id } = req.params;
      const { title, content } = req.body;

      const post = await this.#service
        .updatePostById({ id, title, content }, userId);

      return res.status(200)
        .json(post);
    } catch (error) {
      return res.status(400)
        .json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req;
      const { id } = req.params;

      await this.#service.deletePostById(id, userId);

      return res.status(200)
        .json({ message: 'Post excluído com sucesso!'});
    } catch (error) {
      return res.status(400)
        .json({ message: error.message });
    }
  }
}