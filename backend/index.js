const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
dotenv.config();


const model = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000 
  });

app.get("/" , (req, res)=> {
    res.send("Hello World");
})
app.listen("3000" , (req , res)=>{
    console.log("Server is listening")
})