const express = require("express");
const app = express();
const cors = require("cors");

const port = 9351;
const host = "localhost";
const mongoose = require("mongoose");
const router = require("./router");

// middlewares

app.use(cors()); // unblock browser restrictions
app.use(express.json()); // requests and responses are happening in json format

const uri =
  "mongodb://192.168.4.226:27017,192.168.4.225:27017,192.168.4.224:27017/?replicaSet=rs1";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error connecting to Database");
  }
};

connect();

const server = app.listen(port, host, () => {
  console.log(`Node server is listening to ${server.address().port}`);
});

app.use("/api", router); // /api is used to specify this is a api url
