
exports.up = function(knex, Promise) {
  return knex.schema.createTable('customers', function(table){
    table.increments('id').index().unsigned().primary();
    table.string('name');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('customers');
};
