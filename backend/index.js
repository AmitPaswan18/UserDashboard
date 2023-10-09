const express = require("express");
const { default: mongoose } = require("mongoose");
const router = require("./routes/routes");
// const cors = require("cors");
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/databaseClass")
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("error", err));
app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:5173",
//   })
// );
app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Making of a schema

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
// const User = mongoose.model("user", userSchema);

// app.get("/", async (req, res) => {
//   const allUsers = await User.find({});
//   const showusers = ` <ul>
//   ${allUsers.map((user) => {
//     return `<li>${user.first_name} ${user.last_name}</li>`;
//   })}
//   </ul>`;
//   res.send(showusers);
// });

// app.post("/api/users", (req, res) => {
//   const body = req.body;

//   if (!body.first_name || !body.last_name || !body.email || !body.gender) {
//     res.status(404).json({
//       status: "User Not found",
//       message: "Please fill all the fields",
//     });
//   }

//   const result = User.create({
//     first_name: body.first_name,
//     last_name: body.last_name,
//     email: body.email,
//     gender: body.gender,
//   });

//   res.status(201).json({
//     status: "success",
//     message: "User created successfully",
//     data: result,
//   });
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   fs.writeFile("../dummyjson/db/database.json", JSON.stringify(users), () => {
//     // return res.json({ status: "success", id: users.length });
//     return res.json(user);
//   });
// });
// app.patch("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const userIndex = users.findIndex((user) => user.id === id);

//   if (userIndex === -1) {
//     return res.status(404).json({
//       status: "error",
//       message: "User not found",
//     });
//   }

//   if (req.body.id) {
//     users[userIndex].id = req.body.id;
//   }
//   if (req.body.first_name) {
//     users[userIndex].first_name = req.body.first_name;
//   }
//   if (req.body.last_name) {
//     users[userIndex].last_name = req.body.last_name;
//   }
//   if (req.body.email) {
//     users[userIndex].email = req.body.email;
//   }
//   if (req.body.gender) {
//     users[userIndex].gender = req.body.gender;
//   }
//   fs.writeFile("../dummyjson/db/database.json", JSON.stringify(users), () => {
//     return res.json(users[userIndex]);
//     // return res.json(userIndex, { status: "success", id: users.length });
//   });
// });
// app.delete("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const userIndex = users.findIndex((user) => user.id === id);
//   if (userIndex === -1) {
//     return res.status(404).json({
//       status: "error",
//       message: "User not found",
//     });
//   }
//   const deletedUser = users.splice(userIndex, 1)[0];
//   fs.writeFile("../dummyjson/db/database.json", JSON.stringify(users), () => {
//     res.json(deletedUser);
//     // return res.json(users[userIndex]);
//     // return res.json(userIndex, { status: "success", id: users.length });
//   });
// });
