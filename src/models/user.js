const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        require:true
    }//,
    // username:{
    //     type:String
    // }    


},{timestamps:true})


// pre- save is a trigger that gets a function and execute it before a user object
userSchema.pre('save',async function ancryptPassword(next){
    const user = this;
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();

})

userSchema.methods.isValidPassword = async function checkValidity(password){
    const user = this;
    const compare = await bcrypt.compare(password,user.password);
    return compare;
}

const User = mongoose.model("User",userSchema);
module.exports = User;