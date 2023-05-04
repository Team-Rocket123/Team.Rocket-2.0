const listComments = async (req, res) => {
    const { Comment } = req.deb;
    const comments = await Comment.list();
    res.send(comments)
  }

  module.exports = listComments;