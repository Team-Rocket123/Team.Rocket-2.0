/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comment').del()
  await knex('comment').insert([
    {commentId:1, comment_body:'why tho'},
    {commentId:2, comment_body:'thats crazy'},
    {commentId:3, comment_body:'hella tired'}
  ]);
};
