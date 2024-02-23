const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const questionRouter = require('./routes/questionRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();
dotenv.config();


const model = mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
    socketTimeoutMS: 45000 
  });

app.use(express.json());

app.use('/api/auth' , authRouter);
app.use('/api/question' , questionRouter);
app.use('/api/user' , userRouter);

app.listen("3000" , (req , res)=>{
    console.log("Server is listening")
})