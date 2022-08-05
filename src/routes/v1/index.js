const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const router = express.Router();
const helpController = require('../../controllers/helpController');

router.get('/help',helpController.helpDetails);


router.post(
    '/signup',
    passport.authenticate('signup',{session:false}),async (req, res)=>{
        res.status(200).json({
            success:true,
            message:'Signup successfully',
            data:{
                user:req.user
            }    
        })
});

router.post(
    '/login',
    async (req, res)=>{
        passport.authenticate(
            'login',
            async (err,user,info)=>{
                try{
                    if(err||!user){
                        const error = new error('Something went wrong.');
                        return next(error);
                    }
                    req.login(
                        user,
                        {session:false},
                        async (err)=>{
                            if(err) return next(err);
                            const body = {
                                id:user._id,
                                email:user.email
                            }
                            const token = jwt.sign({user:body},'TOP_SECRET');
                            return res.status(200).json({
                                token,
                                success:true,
                                message:"Successfully signed in"
                            });
                        }
                    )
                }catch(err){
                    console.log(err);
                }
            }
        )
    }
);




module.exports = router;