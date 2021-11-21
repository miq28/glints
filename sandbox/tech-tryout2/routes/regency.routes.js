module.exports = app => {
    const regencies = require("../controllers/regency.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", regencies.create);
  
    // Retrieve all Tutorials
    router.get("/", regencies.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", regencies.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", regencies.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", regencies.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", regencies.delete);
  
    // Delete all Tutorials
    router.delete("/", regencies.deleteAll);
  
    app.use('/api/regencies', router);
  };