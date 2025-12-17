const express = require("express");
const _ = express.Router();

_.post("/generateurl", function (req, res) {
  console.log("Shortner");
});

module.exports = _;
