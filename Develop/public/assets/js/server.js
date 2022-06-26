const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/index.html"
  )
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
