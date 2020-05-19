const kayn = require("../config/kayn.config");
const { REGIONS } = require("kayn");

const matchRequest = async (req, res) => {
  const accountId = req.body.user;
  const server = req.body.server;
  console.time("matchRequest");
  const { matches } = await kayn.Matchlist.by
    .accountID(accountId.accountId)
    .region(REGIONS[server])
    .query({ queue: 420 });
  const gameIds = matches.slice(0, 20).map(({ gameId }) => gameId);
  const requests = gameIds.map(kayn.Match.get);
  const results = await Promise.all(requests);
  res.send(results);
  console.timeEnd("matchRequest");
};

module.exports = matchRequest;
