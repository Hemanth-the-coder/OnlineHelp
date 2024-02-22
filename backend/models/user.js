const mongoose = require("mongoose");
console.log("User models page");
const userSchema = mongoose.Schema({
    username : {
        type : String ,
        required: true,
        min : 3 ,
        max : 20,
        unique : true
    } , 
    email:{
        type : String, 
        required: true , 
        max : 50 ,
        unique : true
    },
    password : {
        type : String,
        required : true,
        min : 6
    },
    age : {
        type : Number, 
        required : true, 
        min : 16
    },
    questionsAsked : {
        type : Array,
        default : []
    },
    questionsAnswered : {
        type : Array, 
        default : []
    }
} , {timestamps : true} , {strict : false})

module.exports = mongoose.model("User" ,userSchema)