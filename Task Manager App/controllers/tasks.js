// Gets all Available Tasks
const getAllTasks = (req, res) => {
  res.status(200).send("<h1>All Items</h1>");
};

// Creates New Task
const createTask = (req, res) => {
  res.status(200).json(req.body);
};

// Gets a Single Task
const getTask = (req, res) => {
  res.status(200).json(req.params.id);
};

// Updates a Task
const updateTask = (req, res) => {
  res.status(200).json(req.params.id);
};

// Deletes a Task
const deleteTask = (req, res) => {
  res.status(200).json(req.params.id);
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
