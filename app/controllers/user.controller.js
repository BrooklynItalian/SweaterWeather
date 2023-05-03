exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};




// const User = require("../models/user.model.js");


// // Create and Save a new user
// exports.create = (req, res) => {  
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }
  
//   // Create a user
//   const user = new User({
//     id: req.body.id,
//     First_Name: req.body.First_Name,
//     Last_Name: req.body.Last_Name,
//     Age: req.body.Age,
//     Sex: req.body.Sex,
//     Size: req.body.Size,
//     Lifestyle: req.body.Lifestyle,
//     City: req.body.City,
//     Password: req.body.Password,
//   });

//   // Save user in the database
//   User.create(user, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the user."
//       });
//     else res.send(data);
//   });
// };

// // Retrieve all users from the database (with condition).
// exports.findAll = (req, res) => {
//   const iduserID = req.query.id;

//   User.getAll(iduserID, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving users."
//       });
//     else res.send(data);
//   });
// };

// // Find a single user by Id
// exports.findOne = (req, res) => {
//   User.findById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found user with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving user with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };

// // find all password users
// exports.findAllpassword = (req, res) => {
//   User.getAllpassword((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving users."
//       });
//     else res.send(data);
//   });
// };

// // Update a user identified by the id in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   User.updateById(
//     req.params.id,
//     new user(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found user with id ${req.params.id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating user with id " + req.params.id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // Delete a user with the specified id in the request
// exports.delete = (req, res) => {
//   User.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found user with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete user with id " + req.params.id
//         });
//       }
//     } else res.send({ message: `user was deleted successfully!` });
//   });
// };

// // Delete all users from the database.
// exports.deleteAll = (req, res) => {
//   User.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all users."
//       });
//     else res.send({ message: `All users were deleted successfully!` });
//   });
// };
