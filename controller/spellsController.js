const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Spells.find()
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findSpell: (req, res) => {
    db.Spells.aggregate([
      { $unwind: "$data" },
      {
        $match: {
          "data.name": req.params.spell,
        },
      },
    ])
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  findClassList: (req, res) => {
    db.Spells.aggregate([
      { $unwind: "$data" },
      {
        $match: {
          "data.class": { $regex: req.params.classname },
        },
      },
    ])
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
};
