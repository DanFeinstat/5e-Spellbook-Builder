const router = require("express").Router();
const spellController = require("../../controller/spellsController");

router.route("/:classname").get(spellController.findClassList);

module.exports = router;
