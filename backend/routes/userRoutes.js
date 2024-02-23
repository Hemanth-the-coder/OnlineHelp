const router = require("express").Router();
const User = require("../models/user");

router.get("/profile/:username" , async (req , res)=> {
    try{
        const user = await User.findOne({username : req.params.username});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports  =  router;
