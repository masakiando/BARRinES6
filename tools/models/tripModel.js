import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let TripSchema = new Schema (
  {
    id: String,
    country: String,
    stayingTime: Number,
    entry: Date,
    departure: Date
  }
);


let Trip = mongoose.model(
  'Trip',
  TripSchema,
  'trips'
);

export default Trip;

// let TripSchema = new Schema ({
//   id: String,
//   country: String,
//   stayingTime: Number,
//   entry: Date,
//   departure: Date},
//   {timestamps: true}
// );
