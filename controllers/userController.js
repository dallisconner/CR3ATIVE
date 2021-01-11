const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.User
      .find(req.query, "name username profession description")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    console.log("Hey inside server API");
    console.log(req.body)
    let { profession, description } = req.body
    db.User
      .findOneAndUpdate({ _id: req.params.id }, { profession, description })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(442).json(err));
  }

};
