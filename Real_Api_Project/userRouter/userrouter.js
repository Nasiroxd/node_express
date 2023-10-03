const users = require("../Model/user.model");
const { getAllUsers, createAllUsers, createUpdate, createDelect, } = require("../controller/user.controller");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createAllUsers);
router.put("/:id", createUpdate);
router.delete("/:id", createDelect);

module.exports = router;