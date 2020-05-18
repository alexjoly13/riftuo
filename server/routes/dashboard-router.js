const express = require("express");
const router = express.Router();

const { REGIONS } = require("kayn");
const kayn = require("../config/kayn.config");

router.post("/user/dashboard", (req, res) => {
  accountId = req.body.user;
  server = req.body.server;

  const matchList = async (kayn) => {
    console.time("matchList");
    const { matches } = await kayn.Matchlist.by
      .accountID(accountId.accountId)
      .region(REGIONS[server])
      .query({ queue: 420 });
    const gameIds = matches.slice(0, 10).map(({ gameId }) => gameId);
    const requests = gameIds.map(kayn.Match.get);
    const results = await Promise.all(requests);

    res.json(results);
    console.timeEnd("matchList");
  };

  matchList(kayn);
});

module.exports = router;
