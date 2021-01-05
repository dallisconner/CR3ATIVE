const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Forum
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: (req, res) => {
        db.Forum
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};