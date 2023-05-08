/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comment').del()
  await knex('comment').insert([
    {comment_id:1, comment_body:'why tho'},
    {comment_id:2, comment_body:'thats crazy'},
    {comment_id:3, comment_body:'hella tired'}
  ]);
};
