const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  findAll: function(req, res) {
    db.Users.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Users.create({
      names: req.body.names,
      email: req.body.email,
      password: req.body.password,
      spellbooks: req.body.spellbooks,
    })
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
    // .then(user => {
    //   const spellbookJwt = jwt.sign(
    //     { _id: req.body._id },
    //     process.env.SECRET
    //   );

    //   res.status(200).send({ userID: user.id, spellbookJwt }); //probably going to need to add a route for finding a specific user
    // })
    // .catch(err => res.status(422).json(err));
  },

  getUser: (req, res) => {
    db.User.find({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteUser: (req, res) => {
    db.Users.deleteOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  newBook: (req, res) => {
    db.Users.updateOne(
      { _id: req.params.id },
      {
        $push: {
          names: req.body.name,
          spellbooks: req.body,
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addSpell: (req, res) => {
    db.Users.updateOne(
      { _id: req.params.id, "spellbooks.name": req.params.username },
      {
        $push: {
          "spellbooks.$.spells": req.body,
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  deleteSpell: (req, res) => {
    db.Users.updateOne(
      { _id: req.params.id, "spellbooks.name": req.params.username },
      {
        $pull: {
          "spellbooks.$.spells": { name: req.params.spellname },
        },
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getSpells: (req, res) => {
    db.Users.findOne({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getUser: function(req, res) {
    db.Users.findOne({ _id: req.params.id })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(404).send(err));
  },
  //   login: function(req, res) {
  //     db.Users.findOne({ email: req.body.email })
  //       .then(dbModel => {
  //         var passwordResult = bcrypt.compare(
  //           req.body.password,
  //           dbModel.password
  //         );

  //         if (passwordResult) {
  //           const spellbookJwt = jwt.sign(
  //             { id: dbModel._id },
  //             process.env.SECRET
  //           );
  //           res.status(200).send({ spellbookJwt, dbModel });
  //         } else {
  //           res.status(404).send({ message: "Incorrect Password" });
  //         }
  //       })
  //       .catch(err => res.status(422).json({ message: "Still not working" }));
  //   },
  // };

  login: function(req, res, next) {
    db.Users.findOne({ email: req.body.email }, function(err, userInfo) {
      if (err) {
        // next(err);
        res.status(404).send({ message: "Invalid email" });
        // res.json({ status: `error`, message: `Invalid email`, data: null });
      } else {
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const spellbookJwt = jwt.sign(
            { id: userInfo._id },
            process.env.SECRET
          );
          res.status(200).send({ spellbookJwt, userInfo });
        } else {
          res.status(404).send({
            message: "Incorrect Password",
          });
        }
      }
    }).catch(err =>
      res.status(422).json({ message: "Email or password invalid" })
    );
  },
};
