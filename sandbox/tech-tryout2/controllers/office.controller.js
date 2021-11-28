const db = require("../models");
const dbModel = db.offices;
const Op = db.Sequelize.Op;
const { isEmptyObject } = require("../utils")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Retrieve all Offices from the database.
exports.findAll = async (req, res) => {

    var condition;
    if (isEmptyObject(req.query)) {
        condition = null;
    }
    else if (req.query.name) {
        condition = { name: { [Op.iLike]: `%${req.query.name}%` } }
    }
    else {
        res.status(400).send('Bad query. Possible keyword: name')
        return;
    }

    try {
        const data = await dbModel.findAll({ where: condition, attributes: { exclude: ['password'] } })
        res.send(data);
    } catch (err) {
        res.status(400).send({
            message:
                err.message || "Some error occurred while retrieving users."
        });
    }

};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    var condition = id ? { id: id } : null;

    try {
        const data = await dbModel.findByPk(id);
        if (data) return res.send(data)
        return res.status(400).send('User not exist')
    } catch (err) {
        res.status(400).send(err.message);
    }
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