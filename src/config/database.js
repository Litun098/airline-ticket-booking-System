const mongoose = require('mongoose');

const connect = ()=>{
    console.log("MongoDB connected requested")
    return mongoose.connect('mongodb://localhost/project')
}

module.exports ={
    connect
}