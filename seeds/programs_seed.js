var faker = require('faker');

let createRecord = (knex, id) => {
  let dt = new Date();
  return knex('programs').insert({
    id,
    user_id: Math.floor( Math.random() * (5 - 1 + 1) ) + 1,
    title: faker.name.title,
    description: faker.lorem.word,
    application_start_time: dt.setDate(dt.getDate() + id),
    application_end_time: dt.setDate(dt.setDate() + (id + 7)),
    min_number_of_participants: 3,
    max_number_of_participants: 20,
    created_at: dt,
    updated_at: dt
  })
}

exports.seed = function(knex, Promise) {
  // return Promise.join(
    // knex('programs').del();
    // .then(() => {
    //   let records = [];
    //
    //   for (let i = 1; i < 10; i++) {
    //     records.push(createRecord(knex, i))
    //   }
    //
    //   return Promise.all(records);
    // })
   // )
   let dt = new Date();
   return knex('programs').insert({
     id: 1,
     user_id: Math.floor( Math.random() * (5 - 1 + 1) ) + 1,
     title: faker.name.title,
     description: faker.lorem.word,
     application_start_time: dt.setDate(dt.getDate() + 1),
     application_end_time: dt.setDate(dt.setDate() + (1 + 7)),
     min_number_of_participants: 3,
     max_number_of_participants: 20,
     created_at: dt,
     updated_at: dt
    })
};
