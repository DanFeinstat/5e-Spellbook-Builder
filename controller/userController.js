const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  findAll: function(req, res) {
    db.Owners.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Users.create(
      Object.assign(req.body, {
        password: bcrypt.hashSync(req.body.password, 10),
      })
    )
      .then(user => {
        const spellbookJwt = jwt.sign({ _id: req.body._id }, "secret");

        res.status(200).send({ userEmail: user.email, spellbookJwt });
      })
      .catch(err => res.status(422).json(err));
  },
  deleteUser: function(req, res) {
    db.Users.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addSpell: (req, res) => {
    db.Users.updateOne(
      { _id: req.params.id },
      {
        $push: {
          spells: [req.body],
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getSpells: function(req, res) {
    // console.log(req.body);
    db.Users.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getUser: function(req, res) {
    db.Users.findOne({ _id: req.params.id })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(404).send(err));
  },
};
