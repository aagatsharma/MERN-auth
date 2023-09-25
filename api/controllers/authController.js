import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
export const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User create successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
