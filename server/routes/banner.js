const express = require("express");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { addBanner, getAllBanners, deleteBanner, updateBanner } = require("../controllers/banner");
const { getUserById } = require("../controllers/user");
const router = express.Router();


router.param("userId", getUserById);


router.post("/add/:userId", isSignedIn, isAuthenticated, isAdmin, addBanner);
router.put("/update/:userId/:id", updateBanner);
router.get("/all", getAllBanners);
router.delete("/delete", deleteBanner);

module.exports = router;