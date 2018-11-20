const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const yummySalt = 10;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    required: true,
  },
  password: { type: String, required: true, select: false },
  spells: { type: Array, default: [] },
});

userSchema.pre("save", function(next) {
  var user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(yummySalt, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, cb) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.findByToken = token => {
  let decode;
  try {
    decode = jwt.verify(token, "secret");
    return userSchema.findOne({ _id: decode._id });
  } catch (e) {
    return Promise.reject();
  }
};

const Users = mongoose.model("UserInfo", userSchema);

module.exports = Users;
