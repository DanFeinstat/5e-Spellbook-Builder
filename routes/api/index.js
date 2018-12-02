const router = require("express").Router();
const userRoutes = require("./userRoutes");
const spellRoutes = require("./spellRoutes");

router.use("/user", userRoutes);
router.use("/spell", spellRoutes);

module.exports = router;
