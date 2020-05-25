const kayn = require("../config/kayn.config");
const { REGIONS } = require("kayn");

exports.rankRequest = (req, res) => {
  const summId = req.body.userId;
  kayn.League.Entries.by
    .summonerID(summId)
    .then((rank) => {
      res.json(rank);
    })
    .catch((error) => console.error(error));
};

exports.matchRequest = async (req, res) => {
  const accountId = req.body.user;
  const server = req.body.server;
  const { matches } = await kayn.Matchlist.by
    .accountID(accountId.accountId)
    .region(REGIONS[server])
    .query({ queue: 420 });
  const gameIds = matches.slice(0, 20).map(({ gameId }) => gameId);
  const requests = gameIds.map(kayn.Match.get);
  const results = await Promise.all(requests).catch((err) => console.log(err));
  res.send(results);
};
