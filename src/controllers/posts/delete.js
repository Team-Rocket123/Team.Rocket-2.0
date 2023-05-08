const destroy = (req, res) => {
    const {
      db: {Post}, 
      params: { id }
    } = req;
    const deleted = Post.deletePost(Number(id));
    const statusCode = deleted ? 204 : 404;
    res.sendStatus(statusCode);
  }
  
  module.exports = destroy;