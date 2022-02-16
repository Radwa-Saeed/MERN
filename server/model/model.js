const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    Name:{type:String,required:true},
    Age:{type:Number},
    Email:{type:String}
})

const UserModel = mongoose.model("Users",UserSchema)
module.exports=UserModel