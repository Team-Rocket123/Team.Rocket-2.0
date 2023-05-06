const knex = require('../knex');

class Post {
    constructor({id, user_id, post_body}) {
        this.id = id;
        this.user_id = user_id;
        this.post_body = post_body;
    }

    static async list() {
        try {
          const query = 'SELECT * FROM posts';
          const { rows } = await knex.raw(query);
          return rows.map((posts) => new Post(posts));
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async create(id, user_id, post_body) {
        try {
          const query = `INSERT INTO posts (id, user_id, post_body)
            VALUES (${1}, ${2}, ${3}) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [id, user_id, post_body]);
          return new Post(post);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      update = async (post) => { // dynamic queries are easier if you add more properties
        try {
          const [updatedPost] = await knex('posts')
            .where({ id: this.id })
            .update({ post })
            .returning('*');
          return updatedPost ? new Post(updatedPost) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }; 

    //   static async delete() {
    //     try {
    //       .where({ id: this.id })
    //     const post = await Post.findById(postId);
    // await post.remove();

    
    //return knex.raw('TRUNCATE users;');
    //     } catch (err) {
    //       console.error(err);
    //       return null;
    //     }
    //   }
    }

module.exports = Post;