const express = require("express");
const router = express.Router();
const { allUser, createUser, findUser, deleteUser } = require('../controllers/user');


router.get("/", allUser);

router.get("/:id", findUser)

router.post("/signup", createUser);

router.delete("/:id", deleteUser);



module.exports = router;
