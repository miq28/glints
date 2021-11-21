module.exports = app => {
    const districts = require("../controllers/district.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", districts.create);
  
    // Retrieve all Tutorials
    router.get("/", districts.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", districts.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", districts.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", districts.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", districts.delete);
  
    // Delete all Tutorials
    router.delete("/", districts.deleteAll);
  
    app.use('/api/districts', router);
  };