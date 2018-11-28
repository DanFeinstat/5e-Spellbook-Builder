const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/signup").post(userController.create);

router.route("/login").post(userController.login);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .put(userController.addSpell)
  .get(userController.getSpells);

router.route("/deletespell/:id/:spellname").put(userController.deleteSpell);
module.exports = router;
