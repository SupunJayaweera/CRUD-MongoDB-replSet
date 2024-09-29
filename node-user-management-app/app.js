const express = require("express");
const app = express();
const cors = require("cors");
const controller = require("./controller");

app.use(
  express.urlencoded({
    // encoding the html form data to arrays/objects
    extended: true, // use to get nested objects
  })
);

// apis
app.get("/users", (req, res) => {
  // getAllUsers function parameters
  controller.getAllUsers((req, res, next) => {
    res.send();
  });
});

app.post("/createuser", (req, res) => {
  controller.addUser(req.body, (callBack) => {
    res.send();
  });
});

app.put("/updateuser", (req, res) => {
  controller.updateUser(req.body, (callBack) => {
    res.send(callBack);
  });
});

app.delete("/deleteuser", (req, res) => {
  controller.deleteUser(req.body, (callBack) => {
    res.send(callBack);
  });
});

module.exports = app;
