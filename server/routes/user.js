// Import the required modules
const express = require("express")
const router = express.Router()
const {login,signup} = require("../controllers/Auth");

const {auth} = require("../middleware/auth")
const {
    resetPasswordToken,
    resetPassword,
  } = require("../controllers/resetPassword")


// Route for user login
router.post("/login", login)
router.post("/signup",signup)

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken)

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword)

// Export the router for use in the main application
module.exports = router