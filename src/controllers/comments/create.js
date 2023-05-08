const createComment = async (req, res) => {
    const {
      db: {Comment},
      body: {comment_id,comment_body}
    } = req;
  
    const comment = await Comment.create(comment_id,comment_body);
    // session.commentId = Comment.userId
  
    res.send(comment)
  }

  module.exports = createComment;