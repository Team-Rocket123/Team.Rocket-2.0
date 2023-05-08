const createPost = async (req, res) => {
    const {
      db: {Post},
      body: {id,post_body}
    } = req;
    const post = await Post.create(id, post_body);
    res.send(post)
  }
  module.exports = createPost;