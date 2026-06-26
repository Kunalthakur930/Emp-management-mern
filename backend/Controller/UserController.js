const UserModel = require("../Model/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saveUser = async (req, res) => {
  const { name, email, password } = req.body || {};
  try {
    if(!name,!email,!password){
      return res.status(401).json({message:"All fields are required"})
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashpassword,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body || {};
  try {
    if (!email, !password) {
      return res.status(401).json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "USer not found" });
    }
    const comparepassword = await bcrypt.compare(password, user.password);
    if (!comparepassword) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Login failed", error: error.message });
  }
};
module.exports = { saveUser, loginUser };
