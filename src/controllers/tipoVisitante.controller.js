"use strict";
const tipoVisitante = require("../models/tipoVisitante.model");

exports.findAll = function (req, res) {
  tipoVisitante.findAll(function (err, usr) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", usr);
    res.send(usr);
  });
};
exports.create = function (req, res) {
  const newTv = new tipoVisitante(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    tipoVisitante.create(newTv, function (err, park) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Tipo Visitante added successfully!",
        data: newTv,
      });
    });
  }
};
exports.findById = function (req, res) {
  tipoVisitante.findById(req.params.id, function (err, usr) {
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
    tipoVisitante.update(
      req.params.id,
      new tipoVisitante(req.body),
      function (err, usr) {
        if (err) res.send(err);
        res.json({ error: false, message: "Tipo Visitante successfully updated" });
      }
    );
  }
};
exports.delete = function (req, res) {
  tipoVisitante.delete(req.params.id, function (err, tv) {
    if (err) res.send(err);
    res.json({ error: false, message: "Tipo Visitante  successfully deleted" });
  });
};
