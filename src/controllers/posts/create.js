const createPost = async (req, res) => {
    const {
      session,
      db: {Post},
      body: {post_body}
    } = req;
    const post = await Post.create(id, session.user_id, post_body);
    res.send(post)
  }
  module.exports = createPost;