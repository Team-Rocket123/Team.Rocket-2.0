const { isAuthorized } = require('../../utils/auth-utils');

const updatePost = async (req, res) => {
  const {
    session,
    db: { Post },
    params: { id },
    body: { post_body },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const post = await Post.find(id);
  if (!post) return res.sendStatus(404);

  const updatedPost = await post.update(post_body);
  res.send(updatedPost);
};

module.exports = updatePost;