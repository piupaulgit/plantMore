const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getAllProducts, addProduct, getProductById, updateProduct, deleteProduct, getProduct } = require("../controllers/product");
const { getUserById } = require("../controllers/user");
const router = express.Router();

router.param("userId", getUserById);
router.param("productId", getProductById);

router.get("/all", getAllProducts);
router.get("/:productId", getProduct);
router.post("/add/:userId", isSignedIn, isAuthenticated, isAdmin, addProduct);
router.put("/update/:userId/:productId", isSignedIn, isAuthenticated, isAdmin, updateProduct);
router.delete("/delete/:userId/:productId", isSignedIn, isAuthenticated, isAdmin, deleteProduct);

module.exports = router;