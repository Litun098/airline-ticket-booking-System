const express = require('express');
const app = express();
const apiRouter = require('./src/routes/index.js');

app.use('/api',apiRouter);

app.get('/', (req,res)=>{
    res.status(200);
    res.send({
        success:true,
        message:"Successfully hitting the api",
        data:{}
    })
})

app.listen(3000, () =>{
    console.log("Server running...");
})