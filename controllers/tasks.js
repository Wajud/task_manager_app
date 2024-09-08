const getAllTasks = (req, res) => {
  res.send("all tasks items live");
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getSingleTask = (req, res) => {
  res.json(req.params.id);
};
const updateTask = (req, res) => {
  res.send("Create Task");
};
const deleteTask = (req, res) => {
  res.send("Create Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
