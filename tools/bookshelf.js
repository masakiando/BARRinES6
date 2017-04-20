import knex from 'knex';
import bookshelf from 'bookshelf';

// "No default export found in module" when mixing ES5 and ES6
// import knexConfing from '../knexfile';
let knexConfing = require('../knexfile');

export default bookshelf(knex(knexConfing.development));
