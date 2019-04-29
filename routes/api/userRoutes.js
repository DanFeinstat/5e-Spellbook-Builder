const router = require("express").Router();
const userController = require("../../controller/userController");

router.route("/signup").post(userController.create);

router.route("/login").post(userController.login);

router.route("/data/:id").get(userController.getUser);

router
  .route("/:id")
  .delete(userController.deleteUser)
  .get(userController.getSpells)
  .put(userController.newBook);

router.route("/:id/:username").put(userController.addSpell);

router
  .route("/deletespell/:id/:username/:spellname")
  .put(userController.deleteSpell);
module.exports = router;
