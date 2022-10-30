"use strict";
const Estadistica = require("../models/estadistica.model");

exports.findAll = function (req, res) {
  Estadistica.findAll(function (err, e) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", e);
    res.send(e);
  });
};
exports.create = function (req, res) {
  const newE = new Estadistica(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Estadistica.create(newE, function (err, park) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Estadistica added successfully!",
        data: newE,
      });
    });
  }
};
exports.findById = function (req, res) {
  Estadistica.findById(req.params.id, function (err, usr) {
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
    Estadistica.update(
      req.params.id,
      new Estadistica(req.body),
      function (err, usr) {
        if (err) res.send(err);
        res.json({ error: false, message: "Estadistica successfully updated" });
      }
    );
  }
};
exports.delete = function (req, res) {
  Estadistica.delete(req.params.id, function (err, tv) {
    if (err) res.send(err);
    res.json({ error: false, message: "Estadistica  successfully deleted" });
  });
};
