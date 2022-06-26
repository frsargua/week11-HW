const express = require("express");
const db = require("../../../db/db.json");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

// Loads notes.html file
app.get("/notes", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/notes.html"
  )
);

// Loads index.html file if url is anything other than notes.
app.get("*", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/index.html"
  )
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
