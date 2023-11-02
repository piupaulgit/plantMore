const User = require("../models/user");

exports.getUserById = async (req, res, next, id) => {
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        error: "User not there in DB",
      });
    }
    req.profile = user;
    next();
  } catch {
    return res.status(400).json({
      error: "Somthing went wrong",
    });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: "No User found",
    });
  }
};
