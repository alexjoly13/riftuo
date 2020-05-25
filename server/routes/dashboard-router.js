const express = require("express");
const router = express.Router();

const controller = require("../controllers/dashboard-controller");

router.post("/dashboard/matches", controller.matchRequest);

router.post("/dashboard/rank", controller.rankRequest);

module.exports = router;
