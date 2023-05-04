const { isAuthorized } = require('../../utils/auth-utils');

const updateComment = async (req, res) => {
  const {
    session,
    db: { Comment },
    params: { id },
    body: { comment_body },
  } = req;

  if (!isAuthorized(id, session)) return res.sendStatus(403);

  const comment = await Comment.find(id);
  if (!comment) return res.sendStatus(404);

  const updatedComment = await comment.update(comment_body);
  res.send(updatedComment);
};

module.exports = updateComment;