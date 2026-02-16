const express = require("express");
const User = require("../models/User");
const generateOtp = require("../utils/otp");

const router = express.Router();

router.post("/register", async (req, res) => {
  const emailOtp = generateOtp();
  const mobileOtp = generateOtp();

  const user = new User({ ...req.body, emailOtp, mobileOtp });
  await user.save();

  console.log("Email OTP:", emailOtp);
  console.log("Mobile OTP:", mobileOtp);

  res.json({ message: "OTP generated (check server console)" });
});

module.exports = router;
