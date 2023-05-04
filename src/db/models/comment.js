class Comment {
    constructor({id, commentId, comment_body}) {
        this.id = id;
        this.commentId = commentId;
        this.comment_body = comment_body;
    }

    static async list() {
        try {
          const query = 'SELECT * FROM comment';
          const { rows } = await knex.raw(query);
          return rows.map((comment) => new Comment(comment));
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      static async create(id, commentId, comment_body) {
        try {
          const query = `INSERT INTO comment (id, commentId, comment_body)
            VALUES (?, ?) RETURNING *`;
          const { rows: [post] } = await knex.raw(query, [id, commentId, comment_body]);
          return new Comment(comment);
        } catch (err) {
          console.error(err);
          return null;
        }
      }

      update = async (comment) => { // dynamic queries are easier if you add more properties
        try {
          const [updatedComment] = await knex('comment')
            .where({ id: this.id })
            .update({ comment })
            .returning('*');
          return updatedComment ? new Comment(updatedComment) : null;
        } catch (err) {
          console.error(err);
          return null;
        }
      }; 
}