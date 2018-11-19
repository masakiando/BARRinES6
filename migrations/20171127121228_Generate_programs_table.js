
exports.up = function(knex, Promise) {
  return knex.schema.createTable('programs', function(table){
    table.increments('id').index().unsigned().primary();
    table.integer('user_id').index().unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
    table.string('title').notNullable();
    table.string('description');
    table.dateTime('application_start_time').notNullable();
    table.dateTime('application_end_time').notNullable();
    table.integer('min_number_of_participants');
    table.integer('max_number_of_participants');
    table.dateTime('created_at');
    table.dateTime('updated_at');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('programs');
};
