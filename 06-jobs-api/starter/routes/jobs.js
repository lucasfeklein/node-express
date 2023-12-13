const express = require("express");
const { register } = require("../controllers/auth");
const router = express.Router();

const {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);

module.exports = router;
