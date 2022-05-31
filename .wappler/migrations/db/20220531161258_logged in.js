
exports.up = function(knex) {
  return knex.schema
    .createTable('logged_in', async function (table) {
      table.increments('id');
      table.string('socke3t_id');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('logged_in')
};
