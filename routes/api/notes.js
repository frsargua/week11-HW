const router = require("express").Router();
const db = require("../../db/db.json");

// Loads database file
router.get("/", (req, res) => res.json(db));

//Deletes notes based on their id
router.delete("/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  const isIdInDb = db.some((value) => value.id == idParam);
  if (isIdInDb) {
    res.send({
      message: "deleted",
      changes: `Note with Id: ${idParam} has been deleted `,
      object: db.pop(),
    });
  }
  res.status(404).json({ id: "Id does not exists!" });
  return;
});

//Creates a new note from object passed by the client
router.post("/", (req, res) => {
  const newNoteObject = req.body;
  db.push(newNoteObject);
  res.send({
    message: "Created",
    changes: `Note with Id: ${newNoteObject.id} has been created `,
    object: newNoteObject,
  });
});
module.exports = router;
