const kayn = require("../config/kayn.config");

exports.rankRequest = (req, res) => {
  const summId = req.body.userId;
  console.log(summId);
  kayn.League.Entries.by
    .summonerID(summId)
    .then((rank) => {
      console.log(rank);
      res.json(rank);
    })
    .catch((error) => console.error(error));
};
