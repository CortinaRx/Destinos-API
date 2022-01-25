const express = require("express");

const router = express.Router();

const {
  getAllScenerys,
  getSceneryById,
} = require("../controllers/scenerys.controller");

router.get("/", getAllScenerys);
router.get("/:sceneryId", getSceneryById);

module.exports = router;
