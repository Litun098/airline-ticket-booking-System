const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    comment:{
        type:String,
        require:true,
        minlength:5
    },
    flight:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Flight',

    }
},{timestamps:true});

const reviewModel = new mongoose.model('Review',reviewSchema)
module.exports=reviewModel