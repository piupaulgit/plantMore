const User = require("../models/user");
const jsonToken = require("jsonwebtoken");
const { expressjwt: jwt } = require("express-jwt");

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

    const token = jsonToken.sign({ _id: user._id }, process.env.SECRETKEY);

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

// is signedin checking
exports.isSignedIn = jwt({
  secret: process.env.SECRETKEY,
  userProperty: "auth",
  algorithms: ["HS256"],
});

// is authenticated
exports.isAuthenticated = (req, res, next) => {
  const checker = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!checker) {
    return res.status(403).json({
      message: "access denied",
    });
  }
  next();
};

// is admin
exports.isAdmin = (req, res, next) => {
  if (req.profile.role === 0) {
    return res.status(403).json({
      message: "you are not admin",
    });
  }

  next();
};
