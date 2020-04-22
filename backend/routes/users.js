const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// PATH = /api/v1/user

// get the user's profile using their ID
router.get("/:id", ctrl.users.show);

module.exports = router;
