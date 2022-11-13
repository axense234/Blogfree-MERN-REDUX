const mongoose = require("mongoose");

const connectDB = (URI) => {
  return mongoose.connect(URI, () => {
    console.log("Connected to the db");
  });
};

module.exports = connectDB;
