
exports.up = function(knex) {
  return knex.schema
    .dropTable('logged_in')
};

exports.down = function(knex) {
  return knex.schema
    .createTable('logged_in', async function (table) {
      table.increments('id').primary().notNullable();
      table.string('socke3t_id', 255);
    })
};
