
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'test1',
          email: 'admin@test1.com',
          timezone: '(GMT-11:00) Pago Pago',
          password_digest: 'test1',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'test2',
          email: 'admin@test2.com',
          timezone: '(GMT-11:00) Pago Pago',
          password_digest: 'test2',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'test3',
          email: 'admin@test3.com',
          timezone: '(GMT-11:00) Pago Pago',
          password_digest: 'test3',
          created_at: new Date(),
          updated_at: new Date()
        }
      ]);
    });
};
