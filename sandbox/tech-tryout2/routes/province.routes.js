module.exports = app => {
  const provinces = require("../controllers/province.controller.js");

  var router = require("express").Router();

  // Create a province
  router.post("/", provinces.create);

  // Retrieve all province
  router.get("/", provinces.findAll);

  // Retrieve a province by id
  router.get("/:id", provinces.findOne);

  app.use('/api/provinces', router);
};