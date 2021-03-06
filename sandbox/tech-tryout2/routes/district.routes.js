module.exports = app => {
  const districts = require("../controllers/district.controller.js");

  var router = require("express").Router();

  // Create a new district
  router.post("/", districts.create);

  // Retrieve all district
  router.get("/", districts.findAll);

  // Retrieve district by id
  router.get("/:id", districts.findOne);

  app.use('/api/districts', router);
};