const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MONGO_URI;

const connectDB = (url) => {
  console.log();
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
