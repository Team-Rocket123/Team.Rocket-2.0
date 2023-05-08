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

      static async create( user_id, post_body) {
        try {
          const query = `INSERT INTO posts (user_id, post_body)
            VALUES (?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [user_id, post_body]);
          return new Post(post);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      update = async (post) => { 
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

      static async deletePost(id) {
        try {
          return knex.raw('DELETE FROM posts WHERE id = ?',[id]);
        } catch (err) {
          console.error(err);
          return null;
        }
      };
    }

module.exports = Post;