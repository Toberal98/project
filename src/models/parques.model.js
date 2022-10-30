"use strict";
var dbConn = require("../../config/db.config");
//Parques object create
var Parques = function (park) {
  this.nombre = park.nombre;
  this.id_usuario = park.id_usuario;
};

Parques.create = function (newPark, result) {
  dbConn.query("INSERT INTO parques set ?", newPark, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Parques.findById = function (id, result) {
  dbConn.query(
    "Select * from parques where id = ? ",
    id,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};
Parques.findAll = function (result) {
  dbConn.query("Select * from parques", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Parques : ", res);
      result(null, res);
    }
  });
};
Parques.update = function (id, park, result) {
  dbConn.query(
    "UPDATE parques SET nombre=?,id_usuario=? WHERE id = ?",
    [
      park.nombre,
      park.id_usuario,
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Parques.delete = function (id, result) {
  dbConn.query("DELETE FROM parques WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Parques;
