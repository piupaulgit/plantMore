const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { addCategory, getAllCategories, getCategoryById, deleteCategory } = require("../controllers/category");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);
router.param("categoryId", getCategoryById);


router.post("/add/:userId", isSignedIn, isAuthenticated, isAdmin, addCategory);
router.get("/all/:userId", isSignedIn, isAuthenticated, isAdmin, getAllCategories);
router.delete("/delete/:userId/:categoryId", isSignedIn, isAuthenticated, isAdmin, deleteCategory)

module.exports = router;