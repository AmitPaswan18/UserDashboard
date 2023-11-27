const User = require("../models/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secretKey = "amit";
const getUser = async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
};
const findOneUser = async (req, res) => {
  const body = req.body;

  try {
    const user = await User.findOne({
      email: body.email,
    });

    if (!user) {
      alert("failed");
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(body.password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    res.json({ token, status: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Login failed" });
  }
};

const postUsers = async (req, res) => {
  const body = req.body;

  const hashedPassword = await bcrypt.hash(body.password, 10);
  if (!body.username || !body.first_name || !body.email || !body.password) {
    res.status(404).json({
      status: "User Not found",
      message: "Please fill all the fields",
    });
  }
  const result = await User.create({
    username: body.username,
    first_name: body.first_name,
    email: body.email,
    password: hashedPassword,
  });

  try {
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: result,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};

const putUsers = async (req, res) => {
  const userId = req.params.id;
  const body = req.body;
  try {
    const result = await User.replaceOne({ _id: userId }, body);
    if (!result) {
      res.status(404).json({
        status: "User Not Found",
        message: "User Not Found",
        data: result,
      });
    }
    res.status(200).json({
      status: "success",
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    console.log("error", err);
  }
};

// const updateUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const body = req.body;
//     const result = await User.findByIdAndUpdate(userId, body);

//     if (!result) {
//       res.status(404).json({
//         status: "User Not Found",
//         message: "User Not Found",
//         data: result,
//       });
//     }
//     res.status(200).json({
//       status: "success",
//       message: "User created successfully",
//       data: result,
//     });
//   } catch (err) {
//     console.log("error", err);
//   }
// };

const deleteUsers = async (req, res) => {
  const result = await User.findOneAndRemove({});
  try {
    if (!result) {
      res.status(404).json({
        status: "Not Found",
        message: "User Not Found",
      });
    }
    res.status(204).json({
      status: "success",
      message: "Deleted successfully",
    });
  } catch (err) {
    console.log("error", err);
  }
};
module.exports = {
  getUser,
  findOneUser,
  postUsers,
  // updateUser,
  deleteUsers,
  putUsers,
};
