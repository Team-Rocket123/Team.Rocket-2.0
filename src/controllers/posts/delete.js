const destroy = (req, res) => {
    const {Post, params: { id }} = req;
    const deleted = Post.delete(Number(id));
    const statusCode = deleted ? 204 : 404;
    res.sendStatus(statusCode);
  }
  
  module.exports = destroy;