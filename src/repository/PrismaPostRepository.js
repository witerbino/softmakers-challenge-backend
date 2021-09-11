export class PrismaPostRepository {
  #database = undefined;

  constructor(prismaClient) {
    this.#database = prismaClient;
  }

  createPost(post) {
    return this.#database.post.create({
      data: post
    });
  }

  getAllPosts(orderBy) {
    return this.#database.post.findMany({
      orderBy: {
        publish_date: orderBy
      }
    });
  }

  getPostById(id) {
    return this.#database.post.findUnique({
      where: { id }
    });
  }

  getAllPostsByUserId(userId, orderBy) {
    return this.#database.post.findMany({
      where: {
        user_id: userId
      },
      orderBy: {
        publish_date: orderBy
      }
    });
  }

  updatePostById({ id, title, content }) {
    return this.#database.post.update({
      where: { id },
      data: { title, content }
    });
  }

  removePostById(id) {
    return this.#database.post.delete({
      where: { id }
    });
  }
}