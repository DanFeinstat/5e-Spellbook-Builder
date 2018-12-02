const db = require("../models");

module.exports = {
  findClassList: (req, res) => {
    db.Spells.aggregate([
      { $unwind: "$data" },
      {
        $match: {
          "data.class": { $regex: req.params.classname },
        },
      },
    ])
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
