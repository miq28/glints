const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const { isEmptyObject } = require("../utils")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {

    // const name = req.query.name
    // var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

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
        const data = await User.findAll({ where: condition, attributes: { exclude: ['password'] } })
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
        const data = await User.findByPk(id);        
        if (data) return res.send(data)
        return res.status(400).send('User not exist')
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Create and Save a new Tutorial
exports.signup = async (req, res) => {
    try {
        // console.log(req)
        // Get user input
        const { first_name, last_name, district_id, email, password } = req.body;

        // Validate user input
        if (!(email && password && first_name && last_name && district_id)) {
            res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await User.findOne({ where: { email: email } });

        if (oldUser) {
            return res.status(409).send("Email address has been used. Please use other email address");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await User.create({
            first_name,
            last_name,
            district_id,
            email: email.toLowerCase(), // sanitize: convert email to lowercase
            password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
            { user_id: user.id, email },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        // convert sequelize object to json
        const data = user.toJSON()
        // save user token
        data.token = token;

        // return new user
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err.message);
    }
};

// User sign-in choose
exports.signin = async (req, res) => {
    res.sendFile('login_form.html',  {root: __dirname+'/public'})
}

// User sign-in
exports.authEmail = async (req, res) => {
    // Our login logic starts here
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ where: {email: email} });

        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
                { user_id: user.id, first_name: user.first_name, last_name: user.last_name, email },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            // user
            res.cookie('jwt', token)
            res.status(200).json(user);
        } else {
            res.status(400).send("Invalid Credentials");
        }
        
    } catch (err) {
        console.log(err);
    }
    // Our register logic ends here

};


// User welcome
exports.welcome = (req, res) => {
    res.status(200).send(`Welcome ${req.user.first_name} ???? `);
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