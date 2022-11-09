"use strict";
var dbConn = require("./../../config/db.config");
var md5 =require("md5");
//Employee object create
var User = function (User) {
  this.nombre = User.nombre;
  this.usuario = User.usuario;
  this.contrasenia = !User.id || User.modifiedPassword?md5(User.contrasenia):User.contrasenia;
  this.dui = User.dui;
  this.tipo = User.tipo;
  this.activo = User.activo;
};

User.create = function (newUsr, result) {
  dbConn.query("INSERT INTO usuario set ?", newUsr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
User.findById = function (id, result) {
  dbConn.query("Select * from usuario where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
User.findAll = function (result) {
  dbConn.query("Select * from usuario", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("usuario : ", res);
      result(null, res);
    }
  });
};

User.findByUsernameAndPassword = function (usr, result) {
  let username = usr.username;
  let password = md5(usr.password);

  if (username && password) {
    dbConn.query(
      "SELECT u.id,u.nombre, u.usuario, u.dui, u.tipo, u.activo FROM usuario u where u.usuario = ? and u.contrasenia = ? and u.activo = 1",
      [username, password],
      function (error, results, fields) {
        if (error) throw error;

        if (results.length > 0) {
          result(null, results);
        } else {
          result(error, null);
        }
      }
    );
  } else {
    result("error", null);
  }
};
User.update = function (id, usr, result) {
  dbConn.query(
    "UPDATE usuario SET nombre=?,usuario=?, dui=?,tipo=?, activo=?,contrasenia=? WHERE id = ?",
    [
      usr.nombre,
      usr.usuario,
      usr.dui,
      usr.tipo,
      usr.activo,
      usr.contrasenia,
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
User.delete = function (id, result) {
  dbConn.query("DELETE FROM usuario WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
module.exports = User;
