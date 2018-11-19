import express from 'express';
import colors from 'colors';
import User from '../models/userModel';
import Login_event from '../models/login_eventModel';
import Login_events_2 from '../models/login_events_2Model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();
console.log('starting acthServer...'.white);

//loginčŞč¨ź reqĺăĺă ć­ŁčŚĺ validations res
router.post('/', (req, res) => {
  console.log('acth start...'.white);
  console.log(req.body);

  const { identifier, password } = req.body;
  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch(
    {withRelated: ['login_event']}, {withRelated: ['login_event_2']}
  ).then(user => {
    console.log('Got user name:', user.get('username'));
    console.log("hello login_event");
    console.log('Got login_event:', user.related('login_event').length);
    console.log(user.related('login_event'));
    const user_login_event = user.related('login_event');
    let login_event = new Login_event({
      user_id: user.get('id'),
      type: 'ログイン1'
    }).save()
    let login_events_2 = new Login_events_2({
      user_id: user.get('id'),
      type: 'ログイン2'
    }).save()
    if (user) {
      if (bcrypt.compareSync(password, user.get('password_digest'))) {
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.jwtSecret);
        res.json({token, user_login_event});
      } else {
        res.status(401).json({
          errors: {
            dbAuth: 'ăăšăŻăźăăć­ŁăăăŞă'
          }
        });
      }
    } else {
      res.status(401).json({
        errors: {
          dbAuth: 'ăŚăźăśăźăĺ­ĺ¨ăăŞă'
        }
      });
      console.log('ăŚăźăśăźăĺ­ĺ¨ăăŞă'.red);
    }
  });
});

export default router;
