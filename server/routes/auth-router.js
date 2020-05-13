const express = require("express");
const router = express.Router();

const { Kayn, REGIONS } = require("kayn");

router.post("/signup", (req, res) => {
  const params = req.body;

  const kayn = Kayn(process.env.RIOT_API_KEY)({
    region: REGIONS[params.server],
    apiURLPrefix: "https://%s.api.riotgames.com",
    locale: "en_US",
    debugOptions: {
      isEnabled: true,
      showKey: false,
    },
    requestOptions: {
      shouldRetry: true,
      numberOfRetriesBeforeAbort: 3,
      delayBeforeRetry: 1000,
      burst: true,
      shouldExitOn403: false,
    },
    cacheOptions: {
      cache: null,
      timeToLives: {
        useDefault: false,
        byGroup: {},
        byMethod: {},
      },
    },
  });

  const summonerData = async () => {
    const sumonner = await kayn.Summoner.by
      .name(params.summonerName)
      .then((response) => {
        console.log(response);
        res.json(response);
      })
      .catch((err) => console.log("*****MESSAGE D'ERREUR ******", err));
  };

  summonerData();
});

module.exports = router;
