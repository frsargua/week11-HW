const express = require("express");
// const db = require("./db/db.json");
const routes = require("./routes/index");
const pageRoutes = require("./routes/pageRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);
app.use("/", pageRoutes);

//Listening to a port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
