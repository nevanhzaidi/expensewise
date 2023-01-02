const express = require("express");

const router = express.Router();
const auth = require("./auth");
const sheets = require("./sheets");

router.use("/auth", auth);
router.use("/sheets", sheets);

module.exports = router;
