// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const bcrypt = require("bcrypt");
// const yummySalt = 10;
// const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
  names: { type: Array, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  password: { type: String, required: true },
  spellbooks: [
    {
      name: { type: String, required: true },
      spells: { type: Array, default: [] },
    },
  ],
});

// userSchema.pre("save", function(next) {
//   var user = this;

//   if (!user.isModified("password")) return next();

//   bcrypt.genSalt(yummySalt, function(err, salt) {
//     if (err) return next(err);

//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if (err) return next(err);

//       user.password = hash;
//       next();
//     });
//   });
// });

// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     cb(null, isMatch);
//   });
// };

// userSchema.findByToken = function(token) {
//   let decode;
//   try {
//     decode = jwt.verify(token, "secret");
//     return userSchema.findOne({ _id: decode._id });
//   } catch (e) {
//     return Promise.reject();
//   }
// };

userSchema.pre("save", function(next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const Users = mongoose.model("UserInfo", userSchema);

module.exports = Users;
