const express = require("express");
const _ = express.Router();
const authRoute = require("./authRoute");
const shortUrlRoute = require("./shortnerRoute");

// Home Page
_.get("/", function (req, res) {
  res.send(
    "Oh what a beautiful morning, oh what a beautiful day, I've got this beautiful feeling, everything'g going my way 🌅"
  );
});
// Authentication route
_.use("/auth", authRoute);
// Short URL generation route
_.use("/shorturl", shortUrlRoute);

// 404, page not found route
_.use(function () {
  res.send("404, Something went wrong");
});

module.exports = _;
