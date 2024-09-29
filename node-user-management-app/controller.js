const User = require("./model");

const getAllUsers = (req, res, next) => {
  User.find() // find all the users
    .then((response) => {
      // response is like a instanse
      res.json({ response }); // return a as a json response
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    id: req.body.id,
    name: req.body.name,
  });
  user
    .save()
    .then((response) => {
      // response is like a instanse
      res.json({ response }); // return a as a json response
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { id, name } = req.body;
  User.updateOne({ id: id }, { $set: { name: name } }) // here, only name is updating
    .then((response) => {
      // response is like a instanse
      res.json({ response }); // return a as a json response
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const id = req.body.id;
  User.deleteOne({ id: id })
    .then((response) => {
      if (response.deletedCount === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "An error occurred" });
      console.log(error);
    });
};

const getUserById = (id, callBack) => {};

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;

// const users = [
//   {
//     id: 1,
//     name: "Supun",
//   },
//   {
//     id: 2,
//     name: "Thiwanka",
//   },
//   {
//     id: 3,
//     name: "Jayaweera",
//   },
// ];

// const getAllUsers = (callBack) => {
//     callBack(users);
//   };

//   const getUserById = (id, callBack) => {
//     const user = users.find((user) => user.id == id);
//     callBack(user);
//   };

//   exports.getAllUsers = getAllUsers;
//   exports.getUserById = getUserById;
