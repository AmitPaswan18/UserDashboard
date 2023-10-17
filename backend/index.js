const express = require("express");
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const router = require("./routes/routes");
const app = express();
const port = 3000;
const momngoUrl = process.env.MONGO;
mongoose
  .connect(momngoUrl)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("error", err));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/", router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
