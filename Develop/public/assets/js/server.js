const express = require("express");
const db = require("../../../db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

// Loads database file
app.get("/api/notes", (req, res) => res.json(db));

// Loads notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/notes.html"
  )
);

app.delete("/api/notes/:id", (req, res) => {
  const idParam = parseInt(req.params.id);
  // const deleteVal = db.find((value) => value.id == idParam);
  const isIdInDb = db.some((value) => value.id == idParam);
  if (isIdInDb) {
    db.pop();
    res.send(`Id = ${idParam} removed`);
  } else res.send("No id present");
});

app.post("/api/notes", (req, res) => {
  const newNoteObject = req.body;
  db.push(newNoteObject);

  res.send(db);
});

// Loads index.html file if url is anything other than notes.
app.get("*", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/index.html"
  )
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
