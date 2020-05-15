const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    summonerName: String,
    server: String,
    summonerAccountData: Object,
  })
);

module.exports = User;
