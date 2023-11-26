const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");
const router = express.Router();

router.route("/").get(getAllTasks);

router.route("/").get(createTask);

router.route("/:id").get(getTask);

router.route("/:id").get(updateTask);

router.route("/:id").get(deleteTask);

module.exports = router;
