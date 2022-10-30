"use strict";
const Parques = require("../models/parques.model");

exports.findAll = function (req, res) {
  Parques.findAll(function (err, usr) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", usr);
    res.send(usr);
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
