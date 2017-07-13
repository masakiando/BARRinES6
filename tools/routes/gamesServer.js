import delay from './delay';
import express from 'express';
import colors from 'colors';
import mongodb from 'mongodb';
import isEmpty from 'lodash/isEmpty';
import bodyParser from 'body-parser';

const app = express();

let router = express.Router();
router.use(bodyParser.json());

console.log('starting gamesServer...'.white);

const dbUrl = 'mongodb://localhost/Building_Applications_with_React_and_Redux_in_ES6_Master';

function validateInput(data) {
  // let isValid = true;
  let errors = {};

   if(!data.title) {
     errors.title = "Can not be empty";
    //  isValid = false;
   }
   if(!data.cover) {
     errors.cover = "Can not be empty";
    //  isValid = false;
   }
   return {
     errors,
     isValid: isEmpty(errors) //nullであることを確認する
    //  isValid
   };
}

mongodb.MongoClient.connect(dbUrl, function(err, db) {

  router.get('/', (req, res) => {
    setTimeout(() => {
      if(err) {
        console.log('I was not connected to the database with get method.'.red);
        console.log(err);
      } else {
        console.log('Connect to the database with get method'.blue);
        db.collection('games').find({}).toArray( (err, games) => {
          if(err) {
            throw(err);
          } else {
            res.json(games);
            console.log("sucessfuly inserted");
          }
        });
      }
    }, delay);
  });

  router.get('/:identifier', (req, res) => {
    setTimeout(() => {
      if(err) {
        console.log('I was not connected to the database with get method.'.red);
        console.log(err);
      } else {
        console.log('Connect to the database with get method '.blue);
        console.log(req.params.identifier);
        db.collection('games')
        .find({
          title: {
            $regex: req.params.identifier + '*',
            $options: 'i'
          }
        }).toArray( (err, games) => {
          if(err) {
            throw(err);
          } else {
            res.json(games);
            console.log(games);
          }
        });
      }
    }, delay);
  });

router.post('/', (req, res) => {
  if(err) {
    console.log('I was not connected to the database with post method. đŠ'.red);
    console.log(err);
  } else {
    console.log('req.bodyă ă đ'.blue);
    const { errors, isValid } = validateInput(req.body);
    if(isValid) {
      console.log('Server isValid Pass đ'.blue);

      const { title, cover } = req.body;
      console.log({ title, cover });
      // db game save
      db.collection('games').insert({ title, cover }, (err, result) => {
        if(err) { //not saveing
          res.status(500).json({
            errors: { global: "Something went wrong" }
          });
        } else {
          // db
          res.json(result.ops[0]); // title, cover, id
          console.log(result.ops[0]);
        }
      });
    } else {
      console.log('Server isValid Fail đŠ'.red);
      res.status(400).json({ errors });
    }
  }
});

  router.put('/:_id', (req, res) => {
    if(err) {
      console.log('I was not connected to the database with put method. đŠ'.red);
      console.log(err);
    } else {
      console.log('Connect to the database with put method đ'.blue);
      const { errors, isValid } = validateInput(req.body);

      if (isValid) {
        const {
          title,
          cover
        } = req.body;
        db.collection('games').findOneAndUpdate(
          { _id: new mongodb.ObjectId(req.params._id) },
          { $set: { title, cover } },
          { returnOriginal: false },
          (err, result) => {
            if (err) {
              res.status(500).json({
                 errors: {
                   global: err
                 }
               });
            } else {
              res.json(result.value);
              console.log(result);
              console.log({ game: result.value });
              console.log('It saved in the database. đ'.blue);
            }
          }
        );
      } else {
        res.status(400).json({ errors });
      }
    }
  });

  router.delete('/:_id', (req, res) => { // start delete
    if(err) {
      console.log('I was not connected to the database with delete method. đŠ'.red);
      console.log(err);
    } else {
      console.log('Connect to the database with delete method đ'.blue);
        db.collection('games').deleteOne(
          { _id: new mongodb.ObjectId(req.params._id) },
          (err, result) => {
            if (err) {
              res.status(500).json({
                 errors: {
                   global: err
                 }
               }); return;
            } else {
              res.json({});
              console.log('It saved in the database. đ'.blue);
            }
          }
        );
    }
  }); // end delete

  //req.method
  router.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
  });
});

export default router;
