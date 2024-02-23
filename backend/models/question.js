const mongoose = require("mongoose");
console.log("Questions model page");

const questionSchema = mongoose.Schema({
    questionTitle: {
        type: String,
        required: true
    },
    questionDescription: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    answers: [{
        username: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);
