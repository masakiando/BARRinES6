import express from 'express';
import colors from 'colors';
import authenticationMiddle from '../middlewares/authenticationMiddle';

let router = express.Router();
console.log('starting workshopeventServer...'.white);

//イベントの追加 req受け取り authentication validations res
router.post(
  '/',
  authenticationMiddle,
  (req, res) => {
  console.log('workshopevent start...'.white);
  console.log(req.body);

  console.log(req.currentUser);
  // res.status(201).json({ user: req.currentUser });
  res.status(201).json({ success: true });
});

export default router;
