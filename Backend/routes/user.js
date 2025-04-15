const express = require("express");
const { deleteUser, getAllUsers } = require("../controllers/user");
const router = express.Router();
//deleting user
router.get("/", getAllUsers);         // GET /api/v1/users
router.delete("/:id", deleteUser);    // DELETE /api/v1/users/:id


module.exports = router;
