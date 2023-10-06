const User = require("../models/user");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");

// register controller
exports.register = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ error: "Authentication failed. User not found." });
    }

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "Authentication failed. Email password does not match",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRETKEY);

    res.cookie("token", token);

    res.json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

// logout controller
exports.logout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User logged out successfully",
  });
};
