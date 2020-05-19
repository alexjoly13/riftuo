const express = require("express");
const router = express.Router();

const { REGIONS } = require("kayn");
const kayn = require("../config/kayn.config");
const matchRequest = require("../middlewares/match-request");

router.post("/user/dashboard", matchRequest);

module.exports = router;
