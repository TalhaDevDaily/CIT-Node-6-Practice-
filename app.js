const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send(
    "Oh what a beautiful morning, oh what a beautiful day, I've got this beautiful feeling, everything'g going my way 🌅"
  );
});

app.listen("8000", function () {
  console.log("Server is running 🏃‍♂️");
});
