const destroy = (req, res) => {
    const {db:{Comment}, params: { id }} = req;
    const deleted = Comment.deleteComment(Number(id));
    const statusCode = deleted ? 204 : 404;
    res.sendStatus(statusCode);
  }
  
  module.exports = destroy;