const BookingService = require('../service/bookingService')


const createBooking = async (req,res) =>{
    try{
        const booking = await BookingService.createBooking(req.body);
        res.status(200).json({
            success:true,
            message:"Booked successfully",
            data:booking
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

const getBoardingPass = async (req,res) =>{
    try{
        const boarding = await BookingService.boardingPass(req.params.id);
        res.status(200).json({
            success:true,
            message:"Successfully fetched booking",
            data:boarding
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Couldn't fetched"
        })
    }
}


const cancelBooking = async (req,res) =>{
    try{
        const booking = await BookingService.cancelBooking(req.params.id);
        res.status(200).json({
            success:true,
            message:"Successfully canceled booking",
            data:booking
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}


module.exports = {
    createBooking,
    getBoardingPass,
    cancelBooking
}