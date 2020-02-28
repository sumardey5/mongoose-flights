const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
      type: String,
      enum: ["AUS", "DFW", "LAX", "SFO", "SEA"]
    },
    arrival: {
      type: Date
    } 
  });

const flightSchema = new Schema({
    airline: { type: String, enum: ["American", "Southwest", "United"]} ,
    flightNo: { type: Number, required: true, min: 10, max: 9999 },
    departs: { type: String },
    airport: { 
        type: String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]}, airport: { type: String, enum: ["AUS", "DFW", "LAX", "SFO", "SEA"], 
        default: "SFO" },

    destinations: [destinationSchema]
});



module.exports = mongoose.model('Flight', flightSchema);

