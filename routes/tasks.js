const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTasks,
  getTask,
  updateTasks,
  deleteTasks,
  // editTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks);
//.put(editTask);

module.exports = router;
