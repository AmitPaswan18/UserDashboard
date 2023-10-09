const controller = require("../controller/controlller");
const express = require("express");
const router = express.Router();
router.get("/users", controller.getUser);
// router.get("/:id", controller.getUserById);
router.post("/api/users", controller.postUsers);
router.put("/api/users/:id", controller.putUsers);
// router.patch("/api/users/:id", controller.updateUser);
router.delete("/api/users", controller.deleteUsers);

module.exports = router;
