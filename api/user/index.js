const { Router } = require("express");
const { createUser, loginUser, getUsers } = require("./user.controller");

const router = Router();

router.post("/", createUser);
router.post("/login", loginUser);

router.get("/", getUsers);


module.exports = router;
