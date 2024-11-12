import userModel from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

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
  } catch (error) {}
};

const loginUser = async (req, res) => {};

export { loginUser, registerUser };
