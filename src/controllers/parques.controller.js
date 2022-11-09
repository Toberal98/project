"use strict";
const Parques = require("../models/parques.model");

exports.findAll = function (req, res) {
  Parques.findAll(function (err, parks) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", parks);
    res.send(parks);
  });
};
exports.create = function (req, res) {
  const newPark = new Parques(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Parques.create(newPark, function (err, park) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Park added successfully!",
        data: park,
      });
    });
  }
};
exports.findById = function (req, res) {
  Parques.findById(req.params.id, function (err, usr) {
    if (err) res.send(err);
    res.json(usr);
  });
};
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Parques.update(
      req.params.id,
      new Parques(req.body),
      function (err, usr) {
        if (err) res.send(err);
        res.json({ error: false, message: "Park successfully updated" });
      }
    );
  }
};
exports.delete = function (req, res) {
  Parques.delete(req.params.id, function (err, park) {
    if (err) res.send(err);
    res.json({ error: false, message: "Park successfully deleted" });
  });
};

exports.findByParams = function(req,res){
  Parques.getEstadistica(req.params.id_user,req.params.fechaDesde, req.params.fechaHasta,function(err, estadisticas){
    console.log("controller");
    if (err) res.send(err);
    console.log("res", estadisticas);
    res.send(estadisticas);
  })
}