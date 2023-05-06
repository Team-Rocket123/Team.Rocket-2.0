const destroy = (req, res) => {
    const {Comment, params: { id }} = req;
    const deleted = Comment.delete(Number(id));
    const statusCode = deleted ? 204 : 404;
    res.sendStatus(statusCode);
  }
  
  module.exports = destroy;