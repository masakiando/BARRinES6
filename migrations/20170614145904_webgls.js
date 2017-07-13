
exports.up = function(knex, Promise) {
  return knex.schema.createTable('webgls', function(table) {
    table.increments();
    table.string('title').notNullable().unique();
    table.string('category').notNullable().unique();
    table.string('description').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('webgls');
};
