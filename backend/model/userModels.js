const mongoose = require("mongoose");

// Define your MongoDB schema and model (replace with your actual schema)
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profileImage: String, // This will store the image URL
});

const User = mongoose.model("randomUsers", userSchema);

module.exports = User;
