const knex = require('../knex');
class Comment {
    constructor({id, comment_id, comment_body}) {
        this.id = id;
        this.comment_id = comment_id;
        this.comment_body = comment_body;
    }

    // static async list() {
    //     try {
    //       const query = 'SELECT * FROM comment';
    //       const { rows } = await knex.raw(query);
    //       return rows.map((comment) => new Comment(comment));
    //     } catch (err) {
    //       console.error(err);
    //       return null;
    //     }
    //   }

      static async create(comment_id, comment_body) {
        try {
          const query = `INSERT INTO comment (comment_id, comment_body)
            VALUES (?, ?) RETURNING *`;
          const { rows: [comment] } = await knex.raw(query, [comment_id, comment_body]);
          return new Comment(comment);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

//       update = async (comment) => { // dynamic queries are easier if you add more properties
//         try {
//           const [updatedComment] = await knex('comment')
//             .where({ id: this.id })
//             .update({ comment })
//             .returning('*');
//           return updatedComment ? new Comment(updatedComment) : null;
//         } catch (err) {
//           console.error(err);
//           return null;
//         }
//       }; 
      static async deleteComment(id) {
        try {
          return knex.raw('DELETE FROM comment WHERE id = ?',[id]);
        } catch (err) {
          console.error(err);
          return null;
        }
      };
  }

  module.exports = Comment