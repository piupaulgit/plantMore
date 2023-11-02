const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { addCategory } = require("../controllers/category");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);


router.post("/add/:userId", isSignedIn, isAuthenticated, isAdmin, addCategory);

module.exports = router;