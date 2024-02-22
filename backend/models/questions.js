const mongoose = require("mongoose");
console.log("Questions model page");
const questionSchema = mongoose.Schema({
    questionTitle : {
        type : String,
        required : true
    },
    questionDescription : {
        type : String,
        required : true
    },
    ageLimit : {
        type : Number,
        min : 6,
        max : 18
    },
    answers : {
        type : Array,
        default : []
    }
} , {timestamps : true} , {strict : false})

module.exports = mongoose.model("Question" ,userSchema);