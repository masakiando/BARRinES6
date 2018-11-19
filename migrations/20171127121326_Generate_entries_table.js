
exports.up = function(knex, Promise) {
  return knex.schema.createTable('entries', function(table){
    table.increments('id').index().unsigned().primary();
    table.integer('program_id').index().unsigned().notNullable().references('id').inTable('programs').onDelete('CASCADE');
    // table.integer('customer_id').index().unsigned().notNullable().references('id').inTable('customers').onDelete('CASCADE');
    table.string('approved');
    table.string('canceled');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('entries');
};
