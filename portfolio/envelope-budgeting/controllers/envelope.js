const router = require("../routes/envelope");
const envelopeDB = require('../models/envelopeDB')

exports.getAllEnvelopes = async (req, res) => {
    try {
        // mock retrieval of a real DB with async/await
        const envelopes = await envelopeDB;
        res.status(200).send(envelopes);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.getEnvelopeById = async (req, res) => {
    const id = req.params
    console.log(id)
    try {
        // mock retrieval of a real DB with async/await
        // const envelopes = await envelopeDB;
        res.status(200).send(id);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.addEnvelope = async (req, res) => {
    const id = req.params
    console.log(id, req.body)
    try {
        // mock retrieval of a real DB with async/await
        // const envelopes = await envelopeDB;
        res.status(200).send(id);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.updateEnvelope = async (req, res) => {
    const id = req.params
    console.log(id)
    try {
        // mock retrieval of a real DB with async/await
        // const envelopes = await envelopeDB;
        res.status(200).send(id);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.deleteEnvelope = async (req, res) => {
    const id = req.params
    console.log(id)
    try {
        // mock retrieval of a real DB with async/await
        // const envelopes = await envelopeDB;
        res.status(200).send(id);
    } catch (err) {
        res.status(400).send(err);
    }
}

exports.transfer = async (req, res) => {
    const id = req.params
    console.log(id)
    try {
        // mock retrieval of a real DB with async/await
        // const envelopes = await envelopeDB;
        res.status(200).send(id);
    } catch (err) {
        res.status(400).send(err);
    }
}


// const envelopeSrv = {
//     getAllEnvelopes,
//     // filterUsersByKey,
//     // addUser,
//     // retrieveLastUser,
// }

// module.exports = envelopeSrv