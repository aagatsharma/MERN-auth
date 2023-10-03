import { User } from "../models/userModel.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";

export const test = (req, res) => {
  res.json({
    message: "Api is working",
  });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can update only your account"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );

    const updatedUserObject = updatedUser.toObject();

    delete updatedUserObject.password;
    res.status(200).json(updatedUserObject);
  } catch (error) {
    next(error);
  }
};

export const deleteuser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can delete only your account"));
  }
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully..");
  } catch (error) {
    next(error);
  }
};
