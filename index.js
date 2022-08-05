const express = require('express');
const apiRouter = require('./src/routes/index.js');
const {connect} = require('./src/config/database'); 
const User = require('./src/models/user')
const bodyParser = require('body-parser');
const passport = require('passport')
const authRouter = require('./src/routes/authRoutes');

require('./src/util/auth');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',authRouter);
app.use('/api',passport.authenticate('jwt',{session:false}),apiRouter);

// app.use(function(err,req, res,next){
//     res.send(err.status);
//     res.json({
//         success:false,
//         error:err
//     })
// })



app.listen(3000, async () =>{ 
    await connect();
    console.log('MongoDB connected successfully');
    console.log("Server running...");
})