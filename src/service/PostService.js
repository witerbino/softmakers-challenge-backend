export class PostService {
  #repository = undefined;
  #filter     = { ALL: 'all', MY: 'my' };

  constructor(postRepository) {
    this.#repository = postRepository;
  }

  async createPost({ title, content, userId }) {
    if (!title.trim() || !content.trim()) {
      throw new Error('Os campos título e conteúdo são obrigatórios');
    }

    const post = await this.#repository.createPost({
      title, content, user_id: userId
    });

    return post;
  }

  async getPostById(id) {
    const post = await this.#repository.getPostById(id);

    if (!post) {
      throw new Error('Post não encontrado');
    }
    return post;
  }

  async getAllPosts(filter, orderBy, userId) {
    if (filter === this.#filter.MY) {
      return this.#repository.getAllPostsByUserId(userId, orderBy);
    }
    return this.#repository.getAllPosts(orderBy);
  }

  async updatePostById({ id, title, content }, userId) {
    if (!title.trim() || !content.trim()) {
      throw new Error('Os campos título e conteúdo são obrigatórios');
    }
    const post = await this.getPostById(id);

    if (post.user_id !== userId) {
      throw new Error('Esse post só pode ser alterado pelo usuário que o criou');
    }

    const postUpdated = await this.#repository.updatePostById({
      id, title, content, 
    });

    return postUpdated;
  }

  async deletePostById(id, userId) {
    const post = await this.getPostById(id);

    if (post.user_id !== userId) {
      throw new Error('Esse post só pode ser excluido pelo usuário que o criou');
    }

    const postDeleted = await this.#repository
      .deletePostById(id);

    return !!postDeleted;
  }
}