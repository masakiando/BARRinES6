import express from 'express';
import colors from 'colors';
import delay from '../../src/api/delay';
// It uses setTimeout to simulate the delay of an AJAX call.
// import validateInput from '../shared/validations/signup';
import commonValidations from '../shared/validations/signupValidator';
import bcrypt from 'bcrypt';
import User from '../models/userModel';
// import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';

let router = express.Router();
console.log('starting usersServer...'.white);

function validateInput(data) {
  // Server Side validations
  let { errors, isValid } = commonValidations(data);

  return User.query({
    where: { email: data.email },
    orWhere: { username: data.username }
  }).fetch()
  .then(user => {
      if (user) {
        if (user.get('username') === data.username) {
          errors.username = 'There is user with such username'; //このようなユーザー名を持つユーザーがいます
        }
        if (user.get('email') === data.email ) {
          errors.email  = 'There is user with such email ';
        }
      }
      return {
        errors,
        isValid: isEmpty(errors)
    };
  });
  // //db after validations(2) Promise bluebird
  // return Promise.all([
  //   User.where({ email: data.email }).fetch().then(user => {
  //     if (user) { errors.email = 'There is user with such email'; }
  //   }),
  //   User.where({ username: data.username }).fetch().then(user => {
  //     if (user) { errors.username = 'There is user with such username'; }
  //   })
  // ]).then(() => {
  //   return {
  //     errors,
  //     isValid: isEmpty(errors)
  //   };
  // });
}

// 一意生validations onBlur
router.get('/:identifier', (req, res) => {
  let errors = false;

  User.query({
    select: [ 'username', 'email' ],
    where: { email: req.params.identifier },
    orWhere: { username: req.params.identifier }
  }).fetch().then(user => {
    if (user) {
      res.json({ errors: true } );
      console.log(errors);
    } else {
      res.json({ errors: false } );
      console.log({errors});
    }
  });
});

// user登録
router.post('/', (req, res) => {
    // Server Side validations & db after validations
    validateInput(req.body)
    .then( ({ errors, isValid }) => {
    // db
      if(isValid) {
        const { username,
                 timezone,
                 email,
                 password
                } = req.body;
        const password_digest = bcrypt.hashSync(password, 10);

          User.forge({ //db save & knex validations
            username,
            timezone,
            email,
            password_digest
          },{ hasTimestamps: true }).save()
            .then(user => res.json({ success: true })) //db validations true
            .catch(error => res.status(500).json({ error: error }));//db validations false
      } else { // Server Side validations false
          res.status(400).json(errors);
        }
    });
});

export default router;
