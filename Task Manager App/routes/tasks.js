const express = require("express");
const router = express.Router();

/*************** Import Controllers ***************/
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

/*************** Routes ***************/
router.route("/").get(getAllTasks).post(createTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
