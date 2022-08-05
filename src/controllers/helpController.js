const helpDetails = (req,res)=>{
    return res.status(200).send({
        message:"Successfully hitting the api",
        success:true,
        data: {
            contact:"+917735648011"
        }
    })
}

module.exports = {
    helpDetails
}