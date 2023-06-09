module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.INTEGER
    },
  });

  return User;
};

// Users.create = (newUser, result) => {
//   console.log(newUser)
//   sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     console.log("created User: ", { id: res.insertId, ...newUser });
//     result(null, { id: res.insertId, ...newUser });
//   });
// };

// Users.findById = (iduserID, result) => {
//   sql.query(`SELECT * FROM Users WHERE id = ${iduserID}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found User: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found User with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// Users.getAll = (iduserID, result) => {
//   let query = "SELECT * FROM Users";

//   if (iduserID) {
//     query += ` WHERE ID LIKE '%${iduserID}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("Users: ", res);
//     result(null, res);
//   });
// };

// Users.getAllpassword= result => {
//   sql.query("SELECT * FROM Users ", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("Users: ", res);
//     result(null, res);
//   });
// };

// Users.updateById = (id, User, result) => {
//   sql.query(
//     "UPDATE Users SET id = ?, user = ?, password= ? WHERE id = ?",
//     [User.id, User.First_Name, User.Last_Name, User.Age, User.Sex, User.Lifestyle, User.City, User.Password, User.id],
//     (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }

//       if (res.affectedRows == 0) {
//         // not found User with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }

//       console.log("updated User: ", { id: id, ...User });
//       result(null, { id: id, ...User });
//     }
//   );
// };

// Users.remove = (id, result) => {
//   sql.query("DELETE FROM Users WHERE id = ?", id, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     if (res.affectedRows == 0) {
//       // not found User with the id
//       result({ kind: "not_found" }, null);
//       return;
//     }

//     console.log("deleted User with id: ", id);
//     result(null, res);
//   });
// };

// Users.removeAll = result => {
//   sql.query("DELETE FROM Users", (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log(`deleted ${res.affectedRows} Users`);
//     result(null, res);
//   });
// };

// module.exports = Users;
