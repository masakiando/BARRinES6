
exports.up = function(knex, Promise) {
  return knex.schema.table('entries', function(table) {
    table.integer('customer_id').index().unsigned().notNullable().references('id').inTable('customers').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('entries', function(table) {
      table.dropColumn('customer_id');
  });
};
