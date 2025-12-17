const express = require("express");
const { signup, signin } = require("../controllers/authController");
const _ = express.Router();

_.post("/signup", signup);

_.post("/signin", signin);

module.exports = _;
