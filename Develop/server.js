const express = require("express");
const path = require("path");
// const db = require("./db/db.json");
const routes = require("./routes/index");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

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
