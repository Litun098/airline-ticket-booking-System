const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send({
        success:true,
        message:"Successfully hitting the api",
        data:{}
    })
})

app.listen(3000, () =>{
    console.log("Server running...");
})