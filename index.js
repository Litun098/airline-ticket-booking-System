const express = require('express');
const apiRouter = require('./src/routes/index.js');
const {connect} = require('./src/config/database'); 
const User = require('./src/models/user')
const app = express();


app.use('/api',apiRouter);

app.get('/', (req,res)=>{
    res.status(200);
    res.send({
        success:true,
        message:"Successfully hitting the api",
        data:{}
    })
})


app.listen(3000, async () =>{
    await connect();
    console.log('MongoDB connected successfully');
    console.log("Server running...");

    // Create user
    // let user =await User.create({
    //     email:"dibyaNayak@gmail.com",
    //     password:324145,
    //     username:"Dibya Nayak"
    // })

    // console.log(user)
})