"use strict";
var dbConn = require("../../config/db.config");
//estadistica object create
var Estadistica = function (e) {
  this.id_parque = e.id_parque;
  this.tipo = e.tipo;
  this.fecha = e.fecha;
  this.cantidad = e.cantidad;
};

Estadistica.create = function (newE, result) {
  dbConn.query("INSERT INTO estadisticas set ?", newE, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Estadistica.findById = function (id, result) {
  dbConn.query(
    "Select * from estadisticas where id = ? ",
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
Estadistica.findAll = function (result) {
  dbConn.query("Select * from estadisticas", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("estadisticas : ", res);
      result(null, res);
    }
  });
};
Estadistica.update = function (id, e, result) {
  dbConn.query(
    "UPDATE estadisticas SET id_parque=?,tipo=?, fecha=?, cantidad=? WHERE id = ?",
    [
      e.id_parque,
      e.tipo,
      e.fecha,
      e.cantidad,
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
Estadistica.delete = function (id, result) {
  dbConn.query("DELETE FROM estadisticas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = Estadistica;
