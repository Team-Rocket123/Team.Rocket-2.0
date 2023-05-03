/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {userId: 1, post_body:'hi'},
    {userId: 2, post_body:'one piece is the greatest of all time'},
    {userId: 3, post_body:'knicks are somehow still in the playoffs'}
  ]);
};
