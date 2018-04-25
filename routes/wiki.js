const express = require('express');
const router = express.Router();

module.exports = router;

router.get("/", function(req, res, next) {
  res.send("Hello world1");
});

router.post("/", function(req, res, next) {
  res.send("Hello world2");
});

router.get("/add", function(req, res, next) {
  res.send("Hello world3");
});
