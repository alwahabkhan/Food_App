import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    const existEmail = await userModel.findOne({ email });
    if (existEmail) {
      return res.json({ success: "false", message: "User already exists" });
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: "false",
        message: "please enter valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter the password with atleast 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashpassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: "false", message: "Error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: "false", message: "User doesnt exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Crediantials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: "false", message: "Error" });
  }
};

export { loginUser, registerUser };
