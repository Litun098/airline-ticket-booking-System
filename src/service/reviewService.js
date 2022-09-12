const Review = require('../models/review');

const createReview = async (data) =>{
    try{
        const newReview = {
            comment:data.comment,
            user:data.userId,
            flight:data.flight
        }
        const response = await new Review(newReview).save();

        return response;
    }catch(err){
        console.log(err);
    }
}

const destroyReview = async (name) =>{
    try{
        const response = await Review.findOneAndDelete({name:name});
        return response;
    }catch(err){
        console.log(err)
    }
}

const getReview = async (user,flight) =>{
    try{
        const response = await Review.findOne({user:user,flight:flight});
        return response;
    }catch(err){
        console.log(err)
    }
}

const getAllReview = async (flight) =>{
    try{
        const response = await Review.find();
        return response;
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createReview,
    destroyReview,
    getReview,
    getAllReview
}