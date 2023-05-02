got   /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('comment', (table) => {
  table.increments('id');
  table.string('commentId')
  table.string('comment_body').notNullable();
  table.timestamps(true, true);
});

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('comment');
};
