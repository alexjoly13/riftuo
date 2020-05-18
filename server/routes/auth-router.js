const express = require("express");
const router = express.Router();

const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth-controller");

const { REGIONS } = require("kayn");
const kayn = require("../config/kayn.config");

router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

router.post("/signup", (req, res) => {
  const params = req.body;

  const summonerData = async () => {
    const sumonner = await kayn.Summoner.by
      .name(params.summonerName)
      .region(REGIONS[params.server])
      .then((response) => {
        console.log(response);
        res.json(response);
      })
      .catch((err) => console.log("*****MESSAGE D'ERREUR ******", err));
  };

  summonerData();
});

router.post(
  "/signup/confirmed",
  verifySignUp.checkDuplicateSummonerAccountOrEmail,
  controller.signup
);

router.post("/login", controller.login);

module.exports = router;
