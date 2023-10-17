const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profileImage: String,
});

const User = mongoose.model("randomUsers", userSchema);

module.exports = User;
