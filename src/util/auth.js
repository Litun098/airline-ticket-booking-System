const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.use('signup', new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},
async (email,password,done)=>{
    try{
        const user = await User.create({email,password})

        return done(null,user);
    }catch(err){
        console.log(err);
        done(err);
    }
}
));

passport.use('login',new LocalStrategy(
    {
        usernameField:'email',
        passwordField:'password'
    },
    async (email,password,done)=>{
        try{
            const user = await User.findOne({email});
            if()
        }catch(err){
            console.log(err);
            return done(err);
        }
    }
))