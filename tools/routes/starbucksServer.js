import delay from './delay';
import express from 'express';
import colors from 'colors';
import mongodb from 'mongodb';
import isEmpty from 'lodash/isEmpty';
import bodyParser from 'body-parser';

const app = express();

let router = express.Router();
router.use(bodyParser.json());

console.log('starting starbucksServer...'.white);

const dbUrl = 'mongodb://localhost/Building_Applications_with_React_and_Redux_in_ES6_Master';

function validateInput(data) {//valid
  let errors = {};

  if(!data.productName) {
    errors.productName = "Can not be empty";
  }
  if(!data.category) {
    errors.dategory = "Can not be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)//null
  };
}

mongodb.MongoClient.connect(dbUrl, (err, db) => { //start db
  // create
  router.post('/', (req, res) => { //post start
    if(err) { //server request get OK , not db connect
      console.log(err);
    } else { // db connect OK
      const { errors, isValid } = validateInput(req.body);
        if(isValid) { //valid pass
          const {
            productName,
            category,
            shortSizePrice,
            tallSizePrice,
            grandeSizePrice,
            ventiSizePrice
          } = req.body;
        db.collection('starbucks').insert( {
          productName,
          category,
          shortSizePrice,
          tallSizePrice,
          grandeSizePrice,
          ventiSizePrice
        }, (err, result) => {
          if(err) {//not save
            res.status(500).json({
              errors: { global: 'Something went wrong'}
            });
          } else {//save ok
            res.json(result.ops[0]); //+id
            console.log(result);
            console.log("data save ok");
          }
        });
      } else { // valid fail
        res.status(400).json({ errors });// valid errors Can not be empty
      }
    }
  }); //post end

  // read
  router.get('/', (req, res) => { // start get
    if(err) { // server request get OK , database connect NG
      console.log(err);
    } else { //  database connect OK
      console.log('Connect to the database with gat method');
      db.collection('starbucks').find({}).toArray( (err, menus) => {
        if(err) { // gat fail
          throw(err);
        } else { //get ok
          console.log('get OK');
          res.json(menus);
        }
      });
    }
  }); // end

  // update
  router.put('/:_id', (req, res) => { // start put
    if(err) { // req OK, db connect NG
      console.log(err);
    } else { // db connect OK
       console.log('connect db ok');
       const { errors, isValid } = validateInput(req.body);
        if(isValid) { //valid pass
          const {
            productName,
            category,
            shortSizePrice,
            tallSizePrice,
            grandeSizePrice,
            ventiSizePrice
          } = req.body;
          db.collection('starbucks').findOneAndUpdate(
            { _id: new mongodb.ObjectId(req.params._id) },
            { $set: {
              productName,
              category,
              shortSizePrice,
              tallSizePrice,
              grandeSizePrice,
              ventiSizePrice
            } },
            { returnOriginal: false },
            (err, result) => {
              if(err) { //not save
                res.status(500).json({
                  errors: {
                    global: err
                  }
                });
              } else { //save ok
                res.json(result.value);
              }
            }
          );
        } else { // valid fail
          res.status(400).json({ errors });
        }
    }
  });

  // delete
  router.delete('/:_id', (req, res) => { // start delete
    if(err) { //request get ok, not db connect
      console.log(err);
    } else { // db connect ok
      console.log('Connect to the database with delete method'.blue);
       db.collection('starbucks').deleteOne(
         { _id: new mongodb.ObjectId(req.params._id) },
         (err, result) => {
           if(err) { // // delete fail
             res.status(500).json({
               errors: {
                 global: err
               }
             }); return;
           } else { // delete OK
             console.log('delete OK');
             res.json({});
           }
         }
       );
    }
  }); // end delete

  // serah

  // not method
  router.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again later when we implement it"
      }
    });
  });

});//end db connect

export default router;
