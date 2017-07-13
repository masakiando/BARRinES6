import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let PlayerSchema = new Schema ({
  id: String,
  playerName: String,
  Positon: String,
  nationality: String,
  age: Number,
  ShirtNumber: Number,
  imgUrl: String
});

let Player = mongoose.model(
  'Player',
  PlayerSchema,
  'players'
);

export default Player;
