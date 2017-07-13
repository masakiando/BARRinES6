import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import Webgl from '../models/webglModel';

const app = express();
let router = express.Router();

router.use(bodyParser.json());

console.log('starting webglServer...'.white);

router.post('/', (req, res) => {
  console.log(req);
  const {
    title,
    category,
    description
  } = req.body;
  Webgl.forge(
    {
      title,
      category,
      description
    }, { hasTimestamps: true }).save()
    .then(
      webgl => res.json({
        success: true
      })
    )
    .catch(
      error => res.status(500).json({
        error: error
      })
    );
});//end post

router.use((req, res) => {
  res.status(500).json({
    errors: {
      global: 'Still working on it. Please try again latrt when we implement it'
    }
  });
});//end

export default router;
