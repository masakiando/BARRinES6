let knexConfing = require('../knexfile');
let knex = require('knex')(knexConfing.development);

describe("a", ()=> {
  it('b', (done) => {
    knex.select('*').from('users')
      .then((rows)=>{
        console.log(rows);
        done();
      });
  });
});
