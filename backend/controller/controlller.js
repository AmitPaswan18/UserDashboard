const User = require("../model/model");

const getUser = async (req, res) => {
  const allUsers = await User.find({});
  res.send(allUsers);
};

// const getUserById = async (req, res) => {
//   const userId = req.params.id;
//   const allUsers = await User.findById(userId,function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("Result : ", docs);
//     }

//   }
// res.send(allUsers)
// }

const postUsers = async (req, res) => {
  const body = req.body;

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
    password: body.password,
  });

  res.status(201).json({
    status: "success",
    message: "User created successfully",
    data: result,
  });
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
  // getUserById,
  postUsers,
  // updateUser,
  deleteUsers,
  putUsers,
};
