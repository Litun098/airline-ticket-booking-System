const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    airline:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Flight'
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    status:{
        type:String,
        required:true,
        enum:["booked","cancelled","processing"]
    }
},{timestamps:true});

const bookingModel = new mongoose.Schema('Booking',bookingSchema)
module.exports = bookingModel;