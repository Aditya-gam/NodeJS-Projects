const express = require("express");
const app = express();

/*************** Database Imports ***************/
const connectDB = require("./db/connect");
require("dotenv").config();

/*************** Route Imports ***************/
const tasks = require("./routes/tasks");

/*************** Middleware ***************/
app.use(express.json());

/*************** Get Routes ***************/
app.get("/hello", (req, res) => {
  res.status(200).send("<h1>Task Manager App</h1>");
});

app.use("/api/v1/tasks", tasks);

/*************** Server Port ***************/
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
