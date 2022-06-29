const router = require("express").Router();
const apiRoute = require("./api/index");

router.use("/api", apiRoute);

// Loads notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(
    "/Users/fabiansarango/Desktop/Bootcamp-2022/Bootcamp Weekly HW/week11-HW/Develop/public/notes.html"
  );
});

module.exports = router;
