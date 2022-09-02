require("./db/connect");
const express = require("express");
const app = express();

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

app.listen(port, console.log(`Server is listening on port ${port}...`));
