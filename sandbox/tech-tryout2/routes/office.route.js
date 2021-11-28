module.exports = app => {
  const office = require("../controllers/office.controller.js");

  var router = require("express").Router();

  // Retrieve all Users
  router.get("/", office.findAll);

  // Retrieve 1 user
  router.get("/:id", office.findOne);

  app.use('/api/offices', router);
};