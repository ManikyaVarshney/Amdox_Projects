const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: String,
  name: String,
  email: String,
  mobile: String,
  dob: String,
  password: String,
  emailOtp: String,
  mobileOtp: String,
  isEmailVerified: { type: Boolean, default: false },
  isMobileVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);
