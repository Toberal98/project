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


Estadistica.getEstadistica = function (id_user, fechaDesde, fechaHasta, result){
  dbConn.query("select p.id, p.nombre, IFNULL(sum(e.cantidad),0)  cantidad from parques p inner join usuario_parque up on up.id_parque = p.id left join estadisticas e on p.id = e.id_parque left join tipovisitante t on t.id = e.tipo where up.id_usuario = ? and  e.fecha between STR_TO_DATE(?,'%d-%m-%Y') and STR_TO_DATE(?,'%d-%m-%Y')  group by p.nombre 	order by e.fecha"
  ,
  [id_user,fechaDesde,fechaHasta],function(err, res){
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  }
  )
}
module.exports = Estadistica;
