const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

//User Signup
router.post("/register", async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    const email = req.body.email;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      res.status(500).json({ message: "The user Already Exists" });
    } else {
      const newuser = await User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        age: req.body.age,
      });
      const user = await newuser.save();
      res.status(201).json(user);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

//User Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      res.status(500).json({ message: "The user didnt registered yet" });
    }
    const validPassword = await bcrypt.compare(password, checkUser.password);
    if (!validPassword) {
      res.status(500).json({ message: "Invalid Password" });
    }
    if (checkUser && validPassword) {
      res.status(200).json(checkUser);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
