const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    departureAirport:{
        type:String,
        required:true
    },
    arrivalAirport:{
        type:Strinrg,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    airline:{
        type:String,
        required:true,
        ref:'Airline'
    },
    flightDate:{
        type:Date,
        default:Date.now
    },
    deaprtureTime:{
        type:Timestamp
    },
    arrivalTime:{
        type:Timestamp
    },
    flightNumber:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true

    }
},{timestamps:true});

const flightModel = new mongoose.model('Flight',flightSchema);

module.exports = flightModel;