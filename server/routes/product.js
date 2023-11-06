const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getAllProducts, addProduct } = require("../controllers/product");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);

router.get("/all", getAllProducts);
router.post("/add/:userId", isSignedIn, isAuthenticated, isAdmin, addProduct);

module.exports = router;