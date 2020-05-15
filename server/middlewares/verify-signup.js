const db = require("../models");
const User = db.user;

checkDuplicateSummonerAccountOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    username: req.body.riotInfos.name,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res
        .status(400)
        .send({ message: "Failed! This Riot account is already in use!" });
      return;
    }

    // Email
    User.findOne({
      email: req.body.userInfos.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }

      next();
    });
  });
};

const verifySignup = {
  checkDuplicateSummonerAccountOrEmail,
};

module.exports = verifySignup;
