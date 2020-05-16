const db = require("../models");
const User = db.user;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  console.log(req.body);
  const user = new User({
    firstName: req.body.userInfos.firstName,
    lastName: req.body.userInfos.lastName,
    email: req.body.userInfos.email,
    password: bcrypt.hashSync(req.body.userInfos.password, 10),
    summonerName: req.body.riotInfos.name,
    server: req.body.userInfos.server,
    summonerAccountData: req.body.riotInfos,
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.json(user);
  });
};

exports.login = (req, res) => {
  console.log(req.body);
  User.findOne({
    email: req.body.email,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: 86400, // 24H
    });

    res.status(200).send({ user: user, accesstoken: token });
  });
};
