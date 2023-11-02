// user routes
const express = require("express");
const router = express.Router();

const {
  getUserById, getAllUsers,
} = require("../controllers/user");

router.param("userId", getUserById);
router.get("/all", getAllUsers);

module.exports = router;