import express from 'express';
import colors from 'colors';
import User from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();
console.log('starting acthServer...'.white);

//login認証 req受け取り 正規化 validations res
router.post('/', (req, res) => {
  console.log('Authentication start...'.white);
  console.log(req.body);

  const { identifier, password } = req.body;

  User.query({
    where: { username: identifier },
    orWhere: { email: identifier }
  }).fetch().then(user => {
    if (user) {
      if (bcrypt.compareSync(
        password,
        user.get('password_digest')
      )) {
        console.log('データベースから所得した情報👇'.white);
        console.log(user);
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.jwtSecret);
        res.json({token});
        console.log(token);
        console.log('idとusernameを材料としてtoken生成'.white);
        console.log('ログインできます'.green);
      } else {
        // express.Router classのstatus methodを使用して401errorを送る json obj付き
        // req先に失敗を返す
        res.status(401).json(
          {errors: { form: 'パスワードが正しくない' }}
        );
        console.log('パスワードが正しくない'.red);
      }
    } else {
      res.status(401).json(
        {errors: { form: 'ユーザーが存在しない' }}
      );
      console.log('ユーザーが存在しない'.red);
    }
  });
});

export default router;
