import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import mongoose from 'mongoose';
import Trip from '../models/tripModel';

const app = express();
let router = express();
router.use(bodyParser.json());

console.log('starting tripServer...'.white);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Building_Applications_with_React_and_Redux_in_ES6_Master');

// create
router.post('/', (req, res) => {
  let item = req.body;
  let trip = new Trip(item);
  trip.save((err, result) => {
    if(err) {
      res.status(500).json({
        errors: { global: 'Something went wrong' }
      });
    } else {
      res.json(result);
      console.log(result);
    }
  });
}); // create end

// read
router.get('/', (req, res) => {
  Trip.find(
    {},
    (err, players) => {
      if(err) {
        throw(err);
      } else {
        console.log('get ok');
        res.json(players);
      }
    }
  );
});// read end

// update
router.put('/:_id', (req, res) => {
  Trip.findById(
    req.params._id,
    (err, trip) => {
      if(err) {
        res.status(500).json({
          errors: { global: err }
        });
      } else {
        trip.country = req.body.country;
        trip.stayingTime = req.body.stayingTime;
        trip.entry = req.body.entry;
        trip.departure = req.body.departure;

        trip.save((err, result) => {
          if(err){
            res.status(500).json({
              errors: {
                global: err
              }
            });
          } else {
            res.json(result);
            console.log('data save ok');
          }
        });
      }
    }
  );
}); //put end

// delete
router.delete('/:_id', (req, res) => {
  Trip.remove(
    { _id: req.params._id},
    (err, result) => {
      if(err) {
         throw(err);
      } else {
        res.json({});
      }
  });
});//delete end

// not req method
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: "Still working on it. Please try again latrt when we implement it"
    }
  });
});

export default router;
