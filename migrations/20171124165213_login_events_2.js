
exports.up = function(knex, Promise) {
  return knex.schema.createTable('login_events_2', function(table){
    table.increments('id').unsigned().primary();
    table.integer('user_id')
    .unsigned()
    .notNull()
    .references('id')
    .inTable('users')
    .onDelete('CASCADE');
    table.string('type').index();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('login_events_2');
};
