const mongoose = require("mongoose");
// Making .env functional
require("dotenv").config();

const dbConfig = function () {
  return mongoose.connect(process.env.DB_MONGO).then(function () {
    console.log("Database is Connected! 📔");
  });
};

module.exports = dbConfig;
