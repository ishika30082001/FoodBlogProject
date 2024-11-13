// Database creation require and call this function in app.js
const mongoose = require("mongoose");
// localurl = "mongodb://127.0.0.1:27017/Blog_1";
const liveurl =
  "mongodb+srv://ishika456agarwal:9Kb17MwVCdFTd4DJ@cluster0.1wzmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = () => {
  return mongoose
    .connect(liveurl) // mongoose.connect hime return mai promise deta hai
    .then(() => {
      console.log("connected successfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB;
