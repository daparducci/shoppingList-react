var express = require("express");
var router = express.Router();
var listsController = require("../controllers/lists");

router.post("/new", listsController.newList);

module.exports = router;
