const express = require("express");
const dbConfig = require("./dbConfig");
const _ = require("./routes");
const app = express();

app.use(express.json());

// Calling Database
dbConfig();
// Calling Router
app.use(_);

app.listen("8000", function () {
  console.log("Server is running 🏃‍♂️");
});
