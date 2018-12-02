const router = require("express").Router();
const spellController = require("../../controller/spellsController");
router.route("/").get(spellController.findAll);
// router.route("/:classname").get(spellController.findClassList);

module.exports = router;
