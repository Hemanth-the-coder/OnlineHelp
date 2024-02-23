const router = require("express").Router();
const Question = require("../models/question");
const User = require("../models/user");

//Create a question 
router.post('/' , async (req , res)=> {
    try{
        const newQuestion = new Question(req.body);
        const savedQuestion = await newQuestion.save();
        res.status(200).json(savedQuestion);
    }
    catch(err){
        res.status(500).json(err);
    }
})


//Get all posts 
router.get('/' , async (req ,res)=> {
     try{
        const questions = await Question.find();
        res.status(200).json(questions);

     }catch(err){
        res.status(500).json(err);
     }
})


//Get All Questions asked by the User.
router.get("/profileQuestions/:username" , async (req, res) => {
    try{
        const user = await User.findOne({username : req.params.username});
        const questions = await Question.find({userId : user._id});
        res.status(200).json(questions)
    }catch(err){
        res.status(500).json(err);
    }
})


//Get all the Questions answered by the user.
router.get("/profileAnswers/:username" , async (req, res)=> {
    try{
        const questions = await Question.find({'answers.username' : req.params.username});
        res.status(200).json(questions)
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
