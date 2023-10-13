const controller = require("../controller/controlller");
const express = require("express");
const router = express.Router();
router.get("/users", controller.getUser);
router.post("/api/users", controller.postUsers);
router.post("/api/users/login", controller.findOneUser);
router.put("/api/users/:id", controller.putUsers);
router.delete("/api/users", controller.deleteUsers);

module.exports = router;
