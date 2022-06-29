const express = require("express");
const path = require("path");
const db = require("./db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Loads notes.html file
app.get("/notes", (req, res) => {
  // res.sendFile();
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/notes.html"
  );
});

// Loads database file
app.get("/api/notes", (req, res) => res.json(db));

//Deletes notes based on their id
app.delete("/api/notes/:id", (req, res) => {
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
app.post("/api/notes", (req, res) => {
  const newNoteObject = req.body;
  db.push(newNoteObject);
  res.send({
    message: "Created",
    changes: `Note with Id: ${newNoteObject.id} has been created `,
    object: newNoteObject,
  });
});

// Loads index.html file if url is anything other than notes.
app.get("*", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/index.html"
  )
);

//Listening to a port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
