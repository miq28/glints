const db = require("../models");
const Regency= db.regencies;
const Op = db.Sequelize.Op;
const { isEmptyObject } = require("../utils")

// Create and Save a new Tutorial
exports.create = async (req, res) => {
  // Validate request
  if (isEmptyObject(req.query)) {
    res.status(400).send({
      message: " Bad query or query is empty!"
    });
    return;
  }

  // Create a Province
  const province = {
    name: req.query.name,
    // description: req.body.description,
    // published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  // Province.create(province)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });

  try {
    const data = await Regency.create(province)
    res.send(data);
  } catch (err) {
    err.message = err.message + '. ' + err.original.detail
    res.status(400).send({
      message:
        err.message || "Some error occurred while retrieving provinces."
    });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {

  // const name = req.query.name
  // var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

  var condition;
  if (isEmptyObject(req.query)) {

    condition = null;
  }
  else if (req.query.provinceId) {
    condition = { province_id: req.query.provinceId }
  }
  else {
    res.status(400).send('Bad query. Possible keyword: name')

    return;
  }

  try {
    const data = await Regency.findAll({ where: condition })
    res.send(data);
  } catch (err) {
    res.status(400).send({
      message:
        err.message || "Some error occurred while retrieving provinces."
    });
  }

};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
  const id = req.params.id;
  var condition = id ? { id: id } : null;

  try {
    const data = await Regency.findByPk(id);
    res.send(data);
  } catch (err) {
    res.status(400).send({
      message:
        err.message || "Some error occurred while retrieving provinces."
    });
  }
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};