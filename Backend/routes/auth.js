const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();


//Registration
router.post("/register", registerUser)

//login
router.post("/login", loginUser)

module.exports = router;