/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => knex.schema.createTable('posts', (table) => {
    table.increments('id');
    table.increments('userId')
    table.string('post_body').notNullable();
    table.timestamps('created_at', true);
    table.timestamps('updated_at', true);
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    knex.schema.dropTable('posts');
};
// 