const express = require("express");
const dataController = require("../controllers/dataController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.get("/list", authMiddleware, dataController.getData);

module.exports = router;
