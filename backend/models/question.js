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
    userId : {
        type : String,
        required : true
    },
    answers : {
        type : Array,
        default : []
    }
} , {timestamps : true} , {strict : false})

module.exports = mongoose.model("Question" ,questionSchema);