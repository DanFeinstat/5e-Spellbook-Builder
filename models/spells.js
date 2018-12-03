const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spellSchema = new Schema({
  data: [
    {
      name: {
        type: String,
        unique: true,
      },
      desc: { type: String },
      page: { type: String },
      range: { type: String },
      components: { type: String },
      material: { type: String },
      ritual: { type: String },
      duration: { type: String },
      concentration: { type: String },
      casting_time: { type: String },
      level: { type: String },
      school: { type: String },
      class: { type: String },
    },
  ],
});

const Spells = mongoose.model("spells", spellSchema);

module.exports = Spells;
