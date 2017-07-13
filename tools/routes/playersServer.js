import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import mongoose from 'mongoose';
import Player from '../models/playerModel';

const app = express();
let router = express();
router.use(bodyParser.json());

console.log('starting playersSetver...'.white);

// const dbUrl =
// 'mongodb://localhost/Building_Applications_with_React_and_Redux_in_ES6_Master';

//function validateInput(data) {}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Building_Applications_with_React_and_Redux_in_ES6_Master');

  // create
  router.post('/', (req, res) => {
        let item = req.body;
        let player = new Player(item);
        player.save((err, result) => {
          if(err) { //not save
            res.status(500).json({
              errors: { global: 'Something went wrong'}
            });
          } else {
            res.json(result);
            console.log('data save ok');
          }
        });
    });

// read
  router.get('/', (req, res) => {
    Player.find(
      {},
      (err, players) => {
      if(err) {
        throw(err);
      } else {
        console.log('get ok');
        res.json(players);
      }
    });
  });
// update
  router.put('/:_id', (req, res) => {
    Player.findById(
      req.params._id,
      (err, player) => {
        if(err) {
          res.status(500).json({
            errors: { global: err }
          });
        } else {
          player.playerName = req.body.playerName;
          player.Positon = req.body.Positon;
          player.nationality = req.body.nationality;
          player.age = req.body.age;
          player.ShirtNumber = req.body.ShirtNumber;
          player.imgUrl = req.body.imgUrl;

          player.save((err, result) => {
            if(err) {
              res.status(500).json({
                errors: { global: err }
              });
            } else {
              res.json(result);
              console.log('data save ok');
            }
          });
        }
      }
    );
  });//put end

// delete
  router.delete('/:_id', (req, res) => {
    Player.remove(
      {_id: req.params._id},
      (err, result) => {
        if(err) {
          throw(err);
        } else {
          res.json({});
        }
      });
  });// delete end

// not method
router.use((req, res) => {
  res.status(404).json({
    errors: {
      global: "Still working on it. Please try again later when we implement it"
    }
  });
});

export default router;
