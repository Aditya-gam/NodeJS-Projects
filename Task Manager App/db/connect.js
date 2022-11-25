const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://aditya_Gambhir:1F08BsFq01oOLdld@nodeexpressprojects.clhfd8x.mongodb.net/Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to the DB..."))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
