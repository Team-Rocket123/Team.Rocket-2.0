const Post = require('../../db/models/post')
const listPosts = async (req, res) => {
    const posts = await Post.list();
    res.send(posts)
  }

  module.exports = listPosts;