const router = require("express").Router();
const apiRoute = require("./api/index");

router.use("/api", apiRoute);

module.exports = router;
