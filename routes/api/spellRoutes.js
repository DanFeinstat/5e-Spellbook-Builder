const router = require("express").Router();
const spellController = require("../../controller/spellsController");
router.route("/").get(spellController.findAll);
router.route("/:classname").get(spellController.findClassList);
router.route("/spellname/:spell").get(spellController.findSpell);

module.exports = router;
