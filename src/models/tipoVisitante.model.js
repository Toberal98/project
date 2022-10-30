"use strict";
var dbConn = require("../../config/db.config");
//TipoVisitante object create
var TipoVisitante = function (tv) {
  this.tipo = tv.tipo;
};

TipoVisitante.create = function (newTv, result) {
  dbConn.query("INSERT INTO tipoVisitante set ?", newTv, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
TipoVisitante.findById = function (id, result) {
  dbConn.query(
    "Select * from tipoVisitante where id = ? ",
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
TipoVisitante.findAll = function (result) {
  dbConn.query("Select * from tipoVisitante", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tipoVisitante : ", res);
      result(null, res);
    }
  });
};
TipoVisitante.update = function (id, tv, result) {
  dbConn.query(
    "UPDATE tipoVisitante SET tipo=? WHERE id = ?",
    [
      tv.tipo,
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
TipoVisitante.delete = function (id, result) {
  dbConn.query("DELETE FROM tipoVisitante WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = TipoVisitante;
