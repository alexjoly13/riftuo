const express = require("express");
const router = express.Router();

const controller = require("../controllers/dashboard-controller");

const { REGIONS } = require("kayn");
const kayn = require("../config/kayn.config");
const matchRequest = require("../middlewares/match-request");

router.post("/dashboard/matches", matchRequest);

router.post("/dashboard/rank", controller.rankRequest);

module.exports = router;
