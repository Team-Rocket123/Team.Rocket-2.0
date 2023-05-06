const createComment = async (req, res) => {
    const {
      session,
      db: {Comment},
      body: {comment_body}
    } = req;
  
    const post = await Comment.create(comment_body);
    session.commentId = Comment.userId
  
    res.send(Comment)
  }

  module.exports = createComment;