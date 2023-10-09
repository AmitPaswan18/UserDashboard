// const { default: mongoose } = require("mongoose");

// const userSchema = new mongoose.Schema({
//   first_name: {
//     type: String,
//     required: true,
//   },
//   last_name: {
//     type: String,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   gender: {
//     type: String,
//     required: true,
//   },
// });
// const User = mongoose.model("User", userSchema);

// module.exports = User;

const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
