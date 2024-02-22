const router = require("express").Router();
const Question = require("../models/question");

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

module.exports = router;
