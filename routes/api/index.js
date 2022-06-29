const router = require("express").Router();
const apiNotes = require("./notes");

router.use("/notes", apiNotes);

module.exports = router;
