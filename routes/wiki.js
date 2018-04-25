const express = require('express');
const router = express.Router();

const models = require('../models');
const Page = models.Page;
const User = models.User;

module.exports = router;

function changer(urlTitle) {
  if (urlTitle) return urlTitle.replace(/\s+/g, "_").replace(/[\W\d]/g, "");
  else return Math.random().toString(36).substring(2,7);
}

Page.beforeValidate((pageInstance, optionsObject) => {
  pageInstance.urlTitle = changer(pageInstance.title);
})

router.get("/", function(req, res, next) {
  res.render("wikipage");
});

router.get("/", function(req, res, next) {
  res.redirect("/");
});

router.get("/add", function(req, res, next) {
  res.render("addpage");
});

router.post("/", function(req, res, next) {
  const page = Page.build({
    title: "Lunch",
    content: "Having lunch!"
  })

  page.save();
});
