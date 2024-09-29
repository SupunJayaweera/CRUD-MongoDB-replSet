const mongoose = require("mongoose");
const Schema = mongoose.Schema; // it is like a plan or bluprint of the database

const userSchema = new Schema({
  id: Number,
  name: String,
});

const User = mongoose.model("User", userSchema); // assigning userSchema to a model called User

module.exports = User;
